import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DeY4LN_g.js
var import_jsx_runtime = require_jsx_runtime();
var S = {
	h2: {
		fontFamily: "var(--font-display)",
		fontSize: 22,
		fontWeight: 900,
		marginTop: 36,
		marginBottom: 12
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
function TermsPage() {
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
					children: "terms of service"
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
					children: [
						"these terms govern your use of the pocket studio website and any appointment you book with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "pocket studio / mykey pocket" }),
						" — a solo hair artist (they/them) based in seattle, wa, currently doing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "house calls only" }),
						". \"i/me/my\" means mykey pocket; \"you\" means the client. by booking an appointment, paying a deposit, or using this site, you agree to these terms."
					]
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"book through the site (or a cal.com link), pay a ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$25 deposit" }),
										", get a reference code. the deposit comes off your total."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"the calendar opens ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "on the 1st for the month ahead" }),
										". cuts book at least ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 days out" }),
										"; new-client color consults ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3 days" }),
										"; existing-client color ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 week" }),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"i text/email a confirmation request ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 hours before" }),
										" your appointment. no reply = the slot may be released."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"cancel with at least ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "24 hours' notice" }),
										" and you're fine. no-call-no-show can be charged ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "up to the full service amount" }),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: ["prices are quoted before or at the chair and depend on your hair. color is priced at the chair. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "payment is due at the appointment." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: S.li,
									children: "house calls: give me a safe, ready spot, an accurate address, and a heads-up on allergies and past chemical work."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									style: S.li,
									children: [
										"pocket studio is ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "not affiliated with rudy's barbershop" }),
										"."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								...S.p,
								marginBottom: 0
							},
							children: "the full terms below control if there's ever a conflict with this summary."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "1. the services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "pocket studio provides hair services by appointment at your location within the seattle area (within 30 miles of seattle). current menu:"
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
									children: "service"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4",
									style: { fontFamily: "var(--font-mono)" },
									children: "duration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2",
									style: { fontFamily: "var(--font-mono)" },
									children: "price"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							style: { color: "var(--color-mist)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "buzz"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "30 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "$50"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "taper / fades"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "45 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "$60"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "short cut"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "45 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "$70"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "long cut"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "60 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "$100"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid rgba(18,14,23,.15)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "curly cut"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-4",
											children: "125 min"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2",
											children: "$120"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-4",
										children: "color"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-4",
										children: "varies"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2",
										children: "priced at the chair"
									})
								] })
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						...S.p,
						marginTop: 14
					},
					children: [
						"a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "travel fee" }),
						" applies to house calls: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$25 base + $2 per mile" }),
						" from seattle, quoted when you book or confirm your address."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "2. booking"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"appointments are booked through the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "booking engine on this site" }),
								"; some booking flows run through ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cal.com" }),
								", and those bookings are also subject to these terms."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"the booking calendar ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "opens on the 1st of each month for the full month ahead" }),
								", first come, first served."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"minimum lead times: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cuts — 2 days out; new-client color consult — 3 days; existing-client color — 1 week." }),
								" need it sooner? the emergency request option on the contact page exists for that, but nothing is guaranteed."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"every booking gets a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "reference code" }),
								". keep it — you can look up, manage, or cancel your booking anytime on the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"my bookings\"" }),
								" page using your email and reference code."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "a booking is a reservation of my time, not a guarantee of a specific result. hair is a collaboration; we'll talk before scissors move."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "3. deposits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$25 deposit" }),
								" is required to hold your slot, paid via a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "stripe payment link" }),
								" after you book."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"the deposit is ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "applied to your total" }),
								" at the appointment."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "stripe processes the payment; i never see your card number. refunds of deposits, where owed under these terms, go back through stripe."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "a slot isn't fully held until the deposit is paid. unpaid bookings may be released."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "4. confirmation rule"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 hours before" }), " your appointment, i send a confirmation request by text and/or email."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"if i don't hear back from you, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "the slot may be released" }),
								" and the appointment treated as cancelled under section 5."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "life happens — if you confirm late or reach out, i'll do my best to keep you in, but released slots go to the next person waiting."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "5. cancellations & no-shows"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"you can cancel free of charge up to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "24 hours before" }),
								" your appointment, through the \"my bookings\" page or by texting/calling",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "425-918-2029" }),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "cancellations inside 24 hours may forfeit the deposit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "no-call-no-show" }),
								" — you're not there, i can't reach you, no cancellation — may be charged ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "up to the full service amount" }),
								". if there's a card on file it may be charged; otherwise i'll ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "send an invoice" }),
								", which is due on receipt."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "deposits for appointments i have to cancel on my end are always refunded in full."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "repeat no-shows may lose the ability to book in advance."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "6. pricing & payment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"prices are ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "quoted before or at the chair" }),
								" and can vary based on hair length, density, condition, and complexity. the menu prices above are the baseline; if your hair needs more, i'll tell you before we start, not after."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "color is always priced at the chair" }), " — it depends on your hair, your history, and what we're doing. a consult (required for new color clients) is how we get to a real number."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "payment is due in full at the time of the appointment" }), ", minus your deposit."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "quotes are good for the appointment they're quoted at. prices on the site may change, but a confirmed booking keeps the price quoted at booking unless the scope changes at the chair by agreement."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "7. house-call terms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "because i come to you, i need a few things from your side:"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "a safe, ready spot:" }), " decent light, a chair, access to an outlet, and enough room to work. if the space is unsafe or unworkable, i may have to decline the service, and the no-show policy may apply."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "an accurate address and access details" }), " (gate codes, parking, which floor). wrong or incomplete addresses can cost us the appointment window."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "honest disclosure:" }),
								" tell me about ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "allergies, sensitivities, and prior chemical work" }),
								" (color, bleach, relaxers, keratin, henna, box dye — all of it) before i start. this is a safety requirement, not a formality. undisclosed history that changes the service may result in rescheduling or repricing at the chair."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "travel fee ($25 base + $2/mile from seattle) applies per section 1 and is quoted up front."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "8. liability"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "i carry out every service with professional care, but you acknowledge that hair services — especially chemical services — carry inherent risks, and results vary by hair type, condition, and history."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"to the fullest extent allowed by law, my total liability for any claim arising from a service or these terms is ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "limited to the amount you paid for the service giving rise to the claim" }),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: S.li,
							children: [
								"i'm not liable for indirect or consequential damages (missed events, lost wages, emotional distress), or for reactions or results caused by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "undisclosed allergies, sensitivities, or prior chemical work" }),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: S.li,
							children: "nothing in these terms limits liability that can't be limited under washington law, including for gross negligence or intentional misconduct."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "9. intellectual property"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "the website — text, photography, design, logos, and branding — belongs to pocket studio / mykey pocket. you may not copy, reproduce, or reuse site content for commercial purposes without written permission. photos i take of finished work are only used (portfolio, socials) with your permission, and you can withdraw that permission anytime."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "10. acceptable use of the site"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "don't misuse the site: no scraping, no fake or fraudulent bookings, no interfering with the booking engine or other people's appointments. fraudulent bookings or chargeback abuse may result in cancellation of bookings and refusal of future service."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "11. affiliation disclaimer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"pocket studio is an independent, one-person studio. it is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "not affiliated with, endorsed by, or connected to rudy's barbershop" }),
						" or any other salon or barbershop business."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "12. governing law & disputes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"these terms are governed by the laws of the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "state of washington" }),
						". any dispute will be handled in the state or federal courts located in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "king county, washington" }),
						", unless we agree to resolve it informally first — which i'd genuinely prefer. text me and let's talk before it becomes a thing."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "13. changes to these terms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: S.p,
					children: "i may update these terms as the business grows (new chair, new studio — fingers crossed). the current version lives on this page with its effective date, and material changes will be flagged on the site before they take effect. bookings made before a change stay under the policies in effect when you booked, except where the law says otherwise."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: S.h2,
					children: "14. contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: S.p,
					children: [
						"questions about any of this — before or after booking:",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"text or call ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "425-918-2029" }),
						" · email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "mykeypocket@icloud.com" }),
						" (alternate:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "itspocketmykey@gmail.com" }),
						")"
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
					children: "draft template notice: this document is a working draft prepared for the pocket studio website. it is provided for informational purposes only and does not constitute legal advice. before publishing, it should be reviewed by a licensed attorney familiar with washington state law — in particular the enforceability of no-show fees, liability limitations, and consumer-protection requirements."
				})
			]
		})]
	});
}
//#endregion
export { TermsPage as component };
