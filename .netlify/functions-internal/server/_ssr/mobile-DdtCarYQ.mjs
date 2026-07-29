import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SERVICES, t as CAL_BASE } from "./services-DG2tVleS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mobile-DdtCarYQ.js
var import_jsx_runtime = require_jsx_runtime();
function PocketStudio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ps",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .ps * { box-sizing: border-box; margin: 0; padding: 0; }
        .ps { background: #FFF4E0; color: #120E17; font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; font-size: 17px; line-height: 1.6; min-height: 100vh; }
        .ps .wrap { max-width: 1024px; margin: 0 auto; padding: 0 16px; }
        .ps section { padding: 44px 0; border-bottom: 3px solid #120E17; }
        .ps section:last-of-type { border-bottom: 0; }
        .ps h1 { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 800; line-height: 1.05; }
        .ps h2 { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 700; font-size: clamp(28px, 6vw, 40px); line-height: 1.1; margin-bottom: 8px; }
        .ps .kick { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; color: #4D6670; margin-bottom: 10px; display: block; }
        .ps .hand { font-family: 'Caveat', cursive; font-size: 24px; color: #B3282D; }

        .ps .btn { display: inline-block; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 500; font-size: 16px; text-decoration: none; padding: 14px 22px; border: 3px solid #120E17; border-radius: 14px; color: #120E17; background: #fff; box-shadow: 4px 4px 0 #120E17; margin: 6px 10px 6px 0; cursor: pointer; }
        .ps .btn.primary { background: #8ACE00; }
        .ps .btn.alt { background: #B8A9F5; }
        .ps .btn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #120E17; }

        .ps header { position: sticky; top: 0; z-index: 50; background: #FFF4E0; border-bottom: 3px solid #120E17; padding: 10px 0; }
        .ps header .wrap { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .ps .logo { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 800; font-size: 20px; text-decoration: none; color: #120E17; }
        .ps .logo .dot { color: #8ACE00; }
        .ps header nav { display: flex; align-items: center; gap: 14px; }
        .ps header nav a.navlink { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 13px; color: #120E17; text-decoration: none; }
        .ps header nav a.navlink:hover { text-decoration: underline; }
        .ps .btn.small { padding: 8px 14px; font-size: 13px; margin: 0; }

        .ps .hero { background: linear-gradient(135deg, #FDE68A 0%, #FFF4E0 55%, #B8A9F5 130%); }
        .ps .hero-inner { display: grid; grid-template-columns: 1.1fr .9fr; gap: 28px; align-items: center; }
        .ps .hero h1 { font-size: clamp(38px, 9vw, 68px); }
        .ps .hero h1 .hl { background: #8ACE00; padding: 0 8px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
        .ps .hero p.lede { font-size: 19px; margin: 14px 0 22px; max-width: 46ch; }
        .ps .badges { margin-top: 18px; }
        .ps .badge { display: inline-block; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; border: 2px solid #120E17; border-radius: 999px; padding: 4px 12px; margin: 4px 6px 0 0; background: #fff; }
        .ps .hero-img { position: relative; border: 3px solid #120E17; border-radius: 18px; overflow: hidden; box-shadow: 6px 6px 0 #120E17; transform: rotate(-1.5deg); }
        .ps .hero-img img { width: 100%; display: block; aspect-ratio: 4/3; object-fit: cover; }
        .ps .hero-img .cap { position: absolute; left: 10px; bottom: 8px; font-family: 'Caveat', cursive; font-size: 26px; color: #fff; text-shadow: 0 2px 0 rgba(18,14,23,.55); transform: rotate(-3deg); }

        .ps .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
        .ps .grid.two { grid-template-columns: repeat(2, 1fr); }
        .ps .card { background: #fff; border: 3px solid #120E17; border-radius: 16px; padding: 18px; box-shadow: 4px 4px 0 #120E17; }
        .ps .card h3 { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-size: 21px; margin-bottom: 6px; }
        .ps .card p { font-size: 15px; color: #2a2433; }
        .ps .meta { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 13px; margin-top: 10px; color: #4D6670; }
        .ps .price { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 500; font-size: 20px; display: inline-block; background: #FDE68A; border: 2px solid #120E17; border-radius: 10px; padding: 2px 10px; margin-bottom: 8px; }
        .ps .svc:nth-child(3n+1) { transform: rotate(-.8deg); }
        .ps .svc:nth-child(3n+2) { transform: rotate(.7deg); }
        .ps .svc:nth-child(3n) { transform: rotate(-.4deg); }
        .ps .card .btn { font-size: 14px; padding: 10px 16px; margin-top: 12px; }

        .ps .artist-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px; align-items: center; }
        .ps .artist-img { border: 3px solid #120E17; border-radius: 18px; overflow: hidden; box-shadow: 6px 6px 0 #8ACE00; transform: rotate(1.5deg); }
        .ps .artist-img img { width: 100%; display: block; aspect-ratio: 4/5; object-fit: cover; }

        .ps .steps { counter-reset: step; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
        .ps .step { background: #fff; border: 3px solid #120E17; border-radius: 16px; padding: 16px; box-shadow: 4px 4px 0 #B8A9F5; position: relative; }
        .ps .step::before { counter-increment: step; content: counter(step); position: absolute; top: -14px; left: 14px; background: #8ACE00; border: 3px solid #120E17; border-radius: 50%; width: 34px; height: 34px; display: grid; place-items: center; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 600; }
        .ps .step h3 { font-size: 17px; margin: 16px 0 6px; font-family: 'Bricolage Grotesque', 'Inter', sans-serif; }
        .ps .step p { font-size: 14px; color: #2a2433; }

        .ps .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 24px; }
        .ps .gallery figure { border: 3px solid #120E17; border-radius: 16px; overflow: hidden; box-shadow: 4px 4px 0 #120E17; background: #fff; }
        .ps .gallery figure:nth-child(odd) { transform: rotate(-1deg); }
        .ps .gallery figure:nth-child(even) { transform: rotate(1deg); }
        .ps .gallery img { width: 100%; display: block; aspect-ratio: 1/1; object-fit: cover; }
        .ps .gallery figcaption { padding: 8px 12px; font-family: 'Caveat', cursive; font-size: 22px; }

        .ps .policies { background: #120E17; color: #FFF4E0; }
        .ps .policies h2 { color: #FFF4E0; }
        .ps .policies .kick { color: #8ACE00; }
        .ps .policies .card { background: #1D1726; color: #FFF4E0; border-color: #FFF4E0; box-shadow: 4px 4px 0 #8ACE00; }
        .ps .policies .card p { color: #d9d2c0; }
        .ps .policies ul { list-style: none; margin-top: 8px; }
        .ps .policies li { padding: 4px 0 4px 26px; position: relative; font-size: 14px; }
        .ps .policies li::before { content: "✂"; position: absolute; left: 0; color: #8ACE00; }

        .ps .contact-list { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 16px; margin-top: 12px; }
        .ps .contact-list a { color: #120E17; }
        .ps .form label { display: block; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; margin: 14px 0 6px; }
        .ps .form input, .ps .form select, .ps .form textarea { width: 100%; font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; font-size: 16px; padding: 12px 14px; border: 3px solid #120E17; border-radius: 12px; background: #fff; }
        .ps .form textarea { min-height: 110px; resize: vertical; }
        .ps .form .btn { width: 100%; margin-top: 18px; text-align: center; }
        .ps .fineprint { font-size: 13px; color: #4D6670; margin-top: 12px; }

        .ps footer { padding: 26px 0 40px; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 13px; color: #4D6670; }
        .ps footer .wrap { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; align-items: center; }

        @media (max-width: 860px) {
          .ps .hero-inner, .ps .artist-grid { grid-template-columns: 1fr; }
          .ps .grid, .ps .grid.two, .ps .gallery { grid-template-columns: 1fr 1fr; }
          .ps .steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .ps .grid, .ps .grid.two, .ps .gallery, .ps .steps { grid-template-columns: 1fr; }
          .ps header nav a.navlink { display: none; }
          .ps .hero { padding-top: 24px; }
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "logo",
					href: "#top",
					children: ["pocket studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dot",
						children: "."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "navlink",
						href: "#services",
						children: "services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "navlink",
						href: "#artist",
						children: "the artist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "navlink",
						href: "#policies",
						children: "policies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "btn primary small",
						href: CAL_BASE,
						target: "_blank",
						rel: "noreferrer",
						children: "book"
					})
				] })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "hero",
				id: "top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap hero-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "seattle · house calls only"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["your chair ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hl",
							children: "comes to you."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "i'm mykey (they/them) — a solo hair artist doing cuts + color in your space. no front desk, no phone tag, no fluorescent waiting room. you book, i show up, you get a great cut in your own kitchen."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn primary",
							href: CAL_BASE,
							target: "_blank",
							rel: "noreferrer",
							children: "book a slot →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn",
							href: "tel:425-918-2029",
							children: "call/text 425-918-2029"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "badges",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "badge",
									children: "$25 deposit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "badge",
									children: "travel fee waived for now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "badge",
									children: "calendar opens the 1st"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand",
							style: { marginTop: 14 },
							children: "same hands, same energy, way fewer hoops ✂"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-img",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/classic/hero-mykey.jpg",
							alt: "mykey mid-cut at a house call, cape on, clippers in hand",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cap",
							children: "house call, capitol hill ~"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "the menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "cuts + color, at your place" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid",
							children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card svc",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "price",
										children: s.price
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.blurb }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "meta",
										children: [s.duration, " · house call"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "btn alt",
										href: `${CAL_BASE}${s.slug}`,
										target: "_blank",
										rel: "noreferrer",
										children: [
											"book ",
											s.name.toLowerCase(),
											" →"
										]
									})
								]
							}, s.slug))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "artist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap artist-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "artist-img",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/classic/artist-mykey.jpg",
							alt: "mykey pocket, seattle hair artist, portrait",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "the artist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "hi, i'm mykey." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "i cut hair, i answer my own phone, and i'd rather come to you than make you sit under fluorescent lights. i'm building pocket studio around one idea: getting a haircut shouldn't cost your whole afternoon or your whole nervous system." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: { marginTop: 12 },
							children: "quiet appointments? say the word. need the playlist off, the chat low, the lights dim? that's not an accommodation, it's just how i work. judgment-free, neurodivergent-friendly, built by one brain on purpose."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand",
							style: { marginTop: 16 },
							children: "— mykey"
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "how it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "book → i drive → you sit" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "steps",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "pick a slot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "the calendar opens the 1st for the month ahead. grab a time, pay the $25 deposit, done." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "i text you" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "day-before reminder, then a 2-hour check-in on the day. reply \"yep\" to keep the slot." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "i show up" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "cape, tools, clippers, a little mat. you point me at an outlet and decent light." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "zero cleanup" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "i sweep, i pack, i go. you're left with a great cut and your own bathroom." })]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "gallery",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "the work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "recent chairs" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gallery",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/classic/cut-1.jpg",
									alt: "taper fade, fresh line-up",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "taper, ballard ~" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/classic/cut-2.jpg",
									alt: "curly cut, full volume",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "curls, fremont ~" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/classic/cut-3.jpg",
									alt: "long layers, blowout",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "long cut, queen anne ~" })] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "policies",
				id: "policies",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "policies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "the fine print, minus the fine print" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid two",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "booking" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "$25 deposit holds your slot (stripe, comes off your total)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "calendar opens the 1st for the month ahead" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2-hour confirmation — reply \"yep\" or the slot may release" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "travel fee ($25 + $2/mi, 30-mi range) waived for now" })
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "cancellations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "free to cancel up to 24 hours out" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "inside 24 hours or no-show may mean a charge" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "manage everything on the my bookings page with your ref code" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "running late? just text — i'd rather know" })
								] })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kick",
							children: "contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "talk to a human (me)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid two",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "fastest: text me" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "questions, \"are you in my neighborhood?\", emergency bang situations — all fair game." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-list",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["call/text · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:425-918-2029",
												children: "425-918-2029"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["email · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "mailto:mykeypocket@icloud.com",
												children: "mykeypocket@icloud.com"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "hours · thu–sun" })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "or send a note" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "form",
									onSubmit: (e) => e.preventDefault(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "ps-name",
											children: "name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "ps-name",
											name: "name",
											autoComplete: "name",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "ps-email",
											children: "email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "ps-email",
											name: "email",
											type: "email",
											autoComplete: "email",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "ps-msg",
											children: "what's up?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "ps-msg",
											name: "message",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "btn primary",
											type: "submit",
											children: "send it →"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "fineprint",
											children: "goes straight to my phone. i reply myself."
										})
									]
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 pocket studio · mykey pocket (they/them) · seattle, wa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "house calls only · not affiliated with rudy's barbershop" })]
			}) })
		]
	});
}
//#endregion
export { PocketStudio as component };
