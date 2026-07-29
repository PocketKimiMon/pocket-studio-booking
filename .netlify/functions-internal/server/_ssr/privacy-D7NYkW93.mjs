import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-D7NYkW93.js
var import_jsx_runtime = require_jsx_runtime();
var S = {
	h2: {
		fontFamily: "var(--font-display)",
		fontSize: 22,
		fontWeight: 900,
		marginTop: 36,
		marginBottom: 12
	},
	h3: {
		fontFamily: "var(--font-display)",
		fontSize: 17,
		fontWeight: 800,
		marginTop: 24,
		marginBottom: 8
	},
	p: {
		marginBottom: 14,
		lineHeight: 1.75,
		color: "var(--color-mist)"
	},
	li: {
		marginBottom: 10,
		lineHeight: 1.7,
		color: "var(--color-mist)"
	}
};
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)",
			minHeight: "100vh"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b-2",
			style: {
				background: "var(--color-bone)",
				borderColor: "var(--color-void)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm font-black tracking-tight",
					style: { fontFamily: "var(--font-display)" },
					children: "✂ POCKET STUDIO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hidden text-sm underline-offset-4 hover:underline sm:block",
						style: { fontFamily: "var(--font-mono)" },
						children: "← home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "var(--color-lime)",
							borderColor: "var(--color-void)",
							boxShadow: "3px 3px 0 var(--color-void)"
						},
						children: "BOOK"
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 pb-24 pt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 13,
						letterSpacing: "0.2em",
						color: "var(--color-flush)"
					},
					children: "LEGAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl",
					style: { fontFamily: "var(--font-display)" },
					children: "privacy policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4",
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 13,
						color: "var(--color-ash)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "effective date:" }), " july 29, 2026"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4",
					style: S.p,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "who this covers:" }), " pocket studio / mykey pocket — a solo hair artist (they/them) based in seattle, wa, doing house calls only. throughout this policy, \"i,\" \"me,\" and \"my\" mean mykey pocket, and \"you\" means the person booking, browsing, or sitting in the chair."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-2 p-6",
					style: {
						background: "var(--color-card-2)",
						borderColor: "var(--color-void)",
						boxShadow: "5px 5px 0 var(--color-void)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: {
								...S.h2,
								marginTop: 0
							},
							children: "the short version (plain-language summary)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc pl-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: S.li,
									children: "i collect what i need to cut your hair: your name, contact info, booking details, and hair notes you give me."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"payments run through ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "stripe" }),
										" — i never see or store your card number."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"some bookings run through ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cal.com" }),
										"; those follow cal.com's privacy policy too."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: S.li,
									children: "i text and email you about your appointment. that's the point of collecting your number."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: S.li,
									children: "i don't sell your data, run ads on it, or share it with anyone who isn't helping deliver your appointment."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: S.li,
									children: "want to see, fix, or delete what i have? text or email me. i'm a one-person shop — you'll get a real answer."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								...S.p,
								marginBottom: 0
							},
							children: "the rest of this page is the same thing in more detail. the detailed version controls if there's ever a conflict."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "1. what i collect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					style: S.h3,
					children: "1.1 information you give me directly"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "booking details:" }), " your name, email address, phone number, the service you're booking, your preferred date and time, your booking reference code, and any notes you add (hair history, inspo, access instructions for the house call)."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "house-call details:" }), " the address where i'm coming, plus anything you tell me about the space — parking, pets, where the good light is."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "hair & safety information:" }), " things you choose to disclose, like allergies, sensitivities, and prior chemical work (color, bleach, relaxers, keratin). i ask because it keeps you safe and your hair intact."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "contact form & messages:" }), " whatever you send through the site, by text, or by email — including emergency booking requests."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "account info (if you log in):" }), " basic profile details tied to your login so your bookings attach to you."]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					style: S.h3,
					children: "1.2 payment information"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"deposits ($25) and any other card payments are processed by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "stripe" }),
						". your card number goes to stripe, not to me. i receive only what stripe shares back: confirmation that you paid, the amount, the last four digits of the card, and your billing email. stripe's handling of your data is governed by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://stripe.com/privacy",
							target: "_blank",
							rel: "noreferrer",
							className: "underline",
							style: { color: "var(--color-flush)" },
							children: "stripe's privacy policy"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					style: S.h3,
					children: "1.3 information collected automatically"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						style: S.li,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "basic site logs:" }), " like most websites, the hosting platform may log your ip address, browser type, pages visited, and timestamps. i use this only to keep the site running and to understand, in aggregate, what's working."]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						style: S.li,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cookies/local storage:" }), " the site uses browser storage for functional things — like keeping a booking flow or a draft message intact. no advertising trackers, no cross-site profiling."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					style: S.h3,
					children: "1.4 information from third parties"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"if you book through a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cal.com" }),
						" link, cal.com shares the booking details with me (name, contact info, appointment time). that's the only third-party source of personal data i use."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "2. how i use it"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "book, confirm, reschedule, and cancel" }),
								" your appointments — including the reference code you use on the \"my bookings\" page."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "send reminders and confirmations" }),
								" by sms and email — including the 2-hour confirmation message before your appointment (if i don't hear back, the slot may be released, per the terms of service)."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "take payment" }),
								": the deposit via stripe, and the balance due at your appointment."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "enforce cancellation and no-show policies" }),
								", including invoicing a no-call-no-show charge (up to the full service amount) when there's no card on file."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "plan your service safely" }),
								" — allergies and prior chemical work directly affect what i can and should do to your hair."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "get to you" }),
								": travel fee math ($25 base + $2 per mile from seattle) uses your address."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "respond" }),
								" to messages, questions, and emergency booking requests."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "meet legal obligations" }),
								" — tax records for payments, responding to lawful requests, that kind of thing."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "i do not sell your personal information. i do not rent it, trade it, or use it for targeted advertising. i have no advertisers to share it with even if i wanted to."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "3. who sees your data (third parties)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "your information is only shared with the services that make the appointment happen:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full border-collapse text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "2px solid var(--color-void)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4",
									style: { fontFamily: "var(--font-mono)" },
									children: "third party"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4",
									style: { fontFamily: "var(--font-mono)" },
									children: "what they get"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2",
									style: { fontFamily: "var(--font-mono)" },
									children: "why"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							style: { color: "var(--color-mist)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-bold",
											children: "stripe"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "payment details, billing email, amount"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "processing the $25 deposit and any card payments"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-bold",
											children: "cal.com"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "booking details for appointments booked through cal.com links"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "some booking flows run on their scheduler"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4 font-bold",
											children: "sms/email providers"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "your phone number or email and message content"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "delivering reminders, confirmations, and replies"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-4 font-bold",
										children: "website hosting provider"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-4",
										children: "standard server logs"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2",
										children: "keeping the site online and secure"
									})
								] })
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						...S.p,
						marginTop: 14
					},
					children: "each of these processes data under their own privacy policies and their own security practices. beyond that list, i share personal information only if the law requires it (a valid subpoena, for example) or if it's necessary to protect someone's safety or my legal rights."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "4. sms & email communications"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"by giving me your phone number or email when booking, you're agreeing to receive",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "transactional messages" }),
						" about your appointments: booking confirmations, reminders, the 2-hour confirmation request, schedule changes, and replies to things you send me. message and data rates from your carrier may apply."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "you can opt out of reminders any time by replying STOP to a text or telling me directly — but fair warning: if you opt out, you might miss the 2-hour confirmation window, and the slot-release rule in the terms still applies. opting out of marketing-style messages (if i ever send any) will never affect your bookings."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "5. how long i keep it"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "booking records & contact info:" }), " kept while you're an active client and for a reasonable period after (generally up to 3 years) so rebooking is easy and i can answer \"what did we do last time?\""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "payment & invoice records:" }), " kept as long as tax and accounting rules require (typically 7 years)."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "contact form messages:" }), " kept until the conversation is resolved, then periodically cleared out."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "site logs:" }), " rotated by the hosting provider on their normal schedule."]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "when data is no longer needed, it's deleted or anonymized. you can always ask me to delete sooner — see section 6."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "6. your rights & choices"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "you can, at any time:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "see" }), " what personal information i have about you;"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "correct" }), " anything that's wrong;"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delete" }), " your information (subject to records i'm legally required to keep, like tax documents);"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "opt out" }), " of sms or email reminders;"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ask questions" }), " about any of this."]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"to do any of the above: text or call ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "425-918-2029" }),
						", or email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "mykeypocket@icloud.com" }),
						" (alternate:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "itspocketmykey@gmail.com" }),
						"). i'll respond within a reasonable time — usually fast, because it's just me and i read everything."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "washington residents: if state privacy laws give you additional rights (access, correction, deletion, appeal), i honor them through the same contact channels, no special form required."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "7. security"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "this is a one-person studio, and i treat your information accordingly: payment data stays inside stripe, booking data lives in the booking system, and i don't keep paper copies of your personal details lying around. no system is perfectly secure, but i use reputable providers and limit what exists in the first place — the less data held, the less there is to lose."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "8. kids"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "my services and this site aren't directed at children under 13, and i don't knowingly collect their information online. if a minor is getting a cut, a parent or guardian books and provides the contact details."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "9. changes to this policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "if this policy changes, the new version goes up on this page with a new effective date. for anything significant, i'll note it on the site before it takes effect. continuing to book after a change means you accept the updated policy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "10. contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"pocket studio / mykey pocket — seattle, wa (house calls only)",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"text or call: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "425-918-2029" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"email: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "mykeypocket@icloud.com" }),
						" (alternate:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "itspocketmykey@gmail.com" }),
						")"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"pocket studio is an independent, solo operation and is",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "not affiliated with rudy's barbershop" }),
						" or any other salon or barbershop chain."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {
					className: "my-10",
					style: { borderColor: "rgba(18,14,23,.2)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs",
					style: {
						color: "var(--color-ash)",
						fontStyle: "italic"
					},
					children: "draft template notice: this document is a working draft prepared for the pocket studio website. it is provided for informational purposes only and does not constitute legal advice. before publishing, it should be reviewed by a licensed attorney familiar with washington state law, consumer privacy requirements, and text-messaging regulations (such as the TCPA)."
				})
			]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
