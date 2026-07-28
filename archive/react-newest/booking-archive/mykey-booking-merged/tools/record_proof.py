from playwright.sync_api import sync_playwright

OUT = "/home/mykey/projects/mykey-booking-merged/proof/vid/proof.webm"

with sync_playwright() as p:
    browser = p.chromium.launch(args=["--no-sandbox", "--disable-gpu"])
    # record the page viewport
    page = browser.new_page(viewport={"width": 1280, "height": 860},
                            record_video_dir="/home/mykey/projects/mykey-booking-merged/proof/vid/",
                            record_video_size={"width": 1280, "height": 860})
    page.goto("http://localhost:8090", wait_until="networkidle")
    page.wait_for_timeout(1500)  # let starfield + marquee run, counter fetch

    # move mouse around to spawn cursor-trail sparkles (visible motion)
    for _ in range(3):
        for x, y in [(200, 260), (500, 400), (820, 280), (1040, 460), (400, 600), (700, 520)]:
            page.mouse.move(x, y)
            page.wait_for_timeout(140)
    page.wait_for_timeout(600)

    # guestbook live POST (interactive)
    page.fill("#gb-name", "reviewer")
    page.fill("#gb-msg", "watching the 90s internet move ✦")
    page.click("#gb-form button[type=submit]")
    page.wait_for_timeout(700)

    # tune on
    page.click("#tune-btn")
    page.wait_for_timeout(600)

    # konami rainbow
    for k in ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]:
        page.keyboard.press(k)
        page.wait_for_timeout(70)
    page.wait_for_timeout(2500)  # let rainbow animate through hues

    # scroll to retro zone to show bottom animation (counter, badges, marquee already moving up top)
    page.evaluate("document.querySelector('.retro-zone').scrollIntoView({block:'center'})")
    page.wait_for_timeout(1500)
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1200)

    page.context.close()
    browser.close()
print("VIDEO DONE")
PY = None
