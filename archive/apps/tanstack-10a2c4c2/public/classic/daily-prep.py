#!/usr/bin/env python3
"""
Daily appointment prep summary for Pocket Studio.

Reads appointments from a CSV file and emails/texts MyKey a summary of
tomorrow's house calls. If no CSV exists, it prints a reminder to export
bookings from Cal.com.

CSV format:
    date,time,client,service,phone,address,notes
Example:
    2026-07-18,14:00,Alex,Buzz Cut,425-555-0101,123 Main St,ring doorbell

To wire this up:
1. Export your Cal.com bookings to CSV and save as bookings.csv in this folder.
2. Set SMTP credentials (or use a service like SendGrid/Postmark) in the env vars below.
3. Run daily with cron or a scheduler.
"""

import csv
import os
import smtplib
import sys
from datetime import date, datetime, timedelta
from email.mime.text import MIMEText

CSV_PATH = os.path.join(os.path.dirname(__file__), "bookings.csv")

SMTP_HOST = os.environ.get("SMTP_HOST", "")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
TO_EMAIL = os.environ.get("TO_EMAIL", "mykeypocket@icloud.com")


def read_bookings(path):
    rows = []
    if not os.path.exists(path):
        return rows
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(row)
    return rows


def tomorrows_appointments(bookings):
    tomorrow = date.today() + timedelta(days=1)
    appts = []
    for b in bookings:
        try:
            appt_date = datetime.strptime(b.get("date", "").strip(), "%Y-%m-%d").date()
        except ValueError:
            continue
        if appt_date == tomorrow:
            appts.append(b)
    appts.sort(key=lambda x: x.get("time", ""))
    return appts


def build_summary(appts):
    if not appts:
        return "No appointments scheduled for tomorrow."

    lines = ["Tomorrow's house calls — Pocket Studio", "=" * 40, ""]
    for a in appts:
        lines.append(f"{a.get('time', '?')} — {a.get('client', 'Unknown')}")
        lines.append(f"  Service: {a.get('service', 'N/A')}")
        lines.append(f"  Phone:   {a.get('phone', 'N/A')}")
        lines.append(f"  Address: {a.get('address', 'N/A')}")
        if a.get("notes"):
            lines.append(f"  Notes:   {a.get('notes')}")
        lines.append("")
    lines.append("Don't forget: 2-hour verification texts.")
    return "\n".join(lines)


def send_email(subject, body):
    if not all([SMTP_HOST, SMTP_USER, SMTP_PASS]):
        print("SMTP not configured. Summary:\n")
        print(body)
        return False

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = TO_EMAIL

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)

    return True


def main():
    bookings = read_bookings(CSV_PATH)
    if not bookings:
        print("No bookings.csv found. Export your Cal.com bookings and save them here.")
        sys.exit(0)

    appts = tomorrows_appointments(bookings)
    summary = build_summary(appts)
    send_email("Pocket Studio — tomorrow's appointments", summary)


if __name__ == "__main__":
    main()
