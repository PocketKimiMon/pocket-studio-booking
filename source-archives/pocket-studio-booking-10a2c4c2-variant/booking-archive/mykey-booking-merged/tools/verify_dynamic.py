import sys
from playwright.sync_api import sync_playwright

BASE = "http://localhost:8090"
OUT = "/home/mykey/projects/mykey-booking-merged/shots"

def main():
    import os
    os.makedirs(OUT, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox", "--disable-gpu"])
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        print("-> load", BASE)
        page.goto(BASE, wait_until="networkidle")
        page.wait_for_timeout(1200)  # let stars + counter JS run

        # 1) top: marquee + stars + hero
        page.screenshot(path=f"{OUT}/01-top.png")
        print("shot 01-top")

        # 2) visitor counter value (dynamic, server-backed)
        vc = page.inner_text("#visitor-count").strip()
        print("visitor-count =", vc)

        # 3) move mouse to trigger sparkle trail, screenshot mid-move
        for x, y in [(200,300),(400,420),(600,300),(800,500),(300,600)]:
            page.mouse.move(x, y)
            page.wait_for_timeout(120)
        page.screenshot(path=f"{OUT}/02-cursor-trail.png")
        print("shot 02-cursor-trail (sparkles present if visible)")

        # 4) guestbook: fill + submit (interactive POST)
        page.fill("#gb-name", "verifier_bot")
        page.fill("#gb-msg", "interactive test ✦ the counter + stars + tune all run")
        page.click("#gb-form button[type=submit]")
        page.wait_for_timeout(800)
        entries = page.query_selector_all(".gb-entry")
        print("guestbook entries after post:", len(entries))
        # scroll the guestbook into view and shoot
        page.eval_on_selector("#guestbook", "el => el.scrollIntoView()")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{OUT}/03-guestbook.png")
        print("shot 03-guestbook")

        # 5) tune button -> audio context + label change (interactive)
        page.click("#tune-btn")
        page.wait_for_timeout(400)
        tune_label = page.inner_text("#tune-btn").strip()
        print("tune button label after click:", tune_label)
        page.screenshot(path=f"{OUT}/04-tune.png")
        print("shot 04-tune")

        # 6) konami rainbow (interactive easter egg)
        seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]
        for k in seq:
            page.keyboard.press(k)
            page.wait_for_timeout(60)
        page.wait_for_timeout(400)
        has_rainbow = page.evaluate("document.body.classList.contains('rainbow')")
        print("body.rainbow class present:", has_rainbow)
        page.screenshot(path=f"{OUT}/05-konami-rainbow.png")
        print("shot 05-konami-rainbow")

        # 7) full page tall capture (dynamic state, everything loaded)
        page.evaluate("document.body.classList.remove('rainbow')")
        page.wait_for_timeout(300)
        page.screenshot(path=f"{OUT}/06-full.png", full_page=True)
        print("shot 06-full (full_page)")

        browser.close()
    print("DONE")

if __name__ == "__main__":
    main()
