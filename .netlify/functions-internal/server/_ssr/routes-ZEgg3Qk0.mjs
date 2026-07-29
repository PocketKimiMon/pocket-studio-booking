import { r as __toESM } from "../_runtime.mjs";
import { t as UPDATES_NEWEST_FIRST } from "./updates-BGaHA-vd.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SERVICES, t as CAL_BASE } from "./services-DG2tVleS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ZEgg3Qk0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceWall, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestDispatch, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Policies, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-[100svh] flex-col justify-between px-5 pb-6 pt-4",
		style: { background: "radial-gradient(60% 42% at 14% 12%, rgba(255,106,0,.32), transparent 62%), radial-gradient(46% 38% at 88% 20%, rgba(15,163,163,.18), transparent 65%), var(--color-bone)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-black tracking-tight sm:text-base",
					style: { fontFamily: "var(--font-display)" },
					children: "✂ POCKET STUDIO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/classic",
						className: "hidden text-xs underline-offset-4 hover:underline sm:block",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--color-ash)"
						},
						children: "classic version →"
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid items-center gap-8 sm:grid-cols-[1.2fr_.8fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 13,
								letterSpacing: "0.2em",
								color: "var(--color-flush)"
							},
							children: "MYKEY POCKET — SEATTLE HAIR ARTIST (THEY/THEM)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-3 text-[13vw] font-extrabold leading-[0.9] tracking-tight sm:text-[88px]",
							style: { fontFamily: "var(--font-display)" },
							children: [
								"your chair",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"moved.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full px-4 py-1 align-baseline",
									style: {
										background: "var(--color-lime)",
										color: "var(--color-void)",
										boxShadow: "6px 6px 0 var(--color-void)"
									},
									children: "catch up."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl",
							style: {
								fontFamily: "Georgia, serif",
								color: "var(--color-mist)"
							},
							children: "i'm not at rudy's anymore — same hands, same energy, way fewer hoops. cuts + color booked directly with me, house calls across seattle while i hunt for a new chair."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: "border-2 px-7 py-3 text-base font-black transition-transform hover:-translate-y-0.5",
								style: {
									background: "var(--color-void)",
									color: "var(--color-bone)",
									borderColor: "var(--color-void)",
									boxShadow: "4px 4px 0 var(--color-flush)"
								},
								children: "BOOK A HOUSE CALL →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "border-b-2 pb-0.5 text-base font-bold",
								style: {
									borderColor: "var(--color-flush)",
									color: "var(--color-flush)"
								},
								children: "see the menu ↓"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCollage, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap items-center justify-between gap-2 text-xs",
				style: {
					fontFamily: "var(--font-mono)",
					color: "var(--color-ash)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "thu–sun · seattle, wa · house calls only" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:block",
					children: "scroll for the good stuff ↓"
				})]
			})
		]
	});
}
function HeroCollage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto hidden h-[460px] w-full max-w-[400px] sm:block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "absolute left-2 top-2 w-[58%] rotate-[-5deg] border-2 p-2",
				style: {
					background: "#fff",
					borderColor: "var(--color-void)",
					boxShadow: "6px 6px 0 var(--color-void)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/work/curl-1.jpg",
					alt: "Curly cut fresh out of the chair",
					className: "aspect-[3/4] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "pt-2 text-lg leading-none",
					style: {
						fontFamily: "var(--font-hand)",
						color: "var(--color-mist)"
					},
					children: "the curls showed UP"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "absolute right-0 top-24 w-[52%] rotate-[4deg] border-2 p-2",
				style: {
					background: "#fff",
					borderColor: "var(--color-void)",
					boxShadow: "6px 6px 0 var(--color-void)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/work/fade-1.jpg",
					alt: "Taper fade, clean line-up",
					className: "aspect-[3/4] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "pt-2 text-lg leading-none",
					style: {
						fontFamily: "var(--font-hand)",
						color: "var(--color-mist)"
					},
					children: "taper tuesday"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "absolute bottom-2 left-[18%] w-[46%] rotate-[-2deg] border-2 p-2",
				style: {
					background: "#fff",
					borderColor: "var(--color-void)",
					boxShadow: "6px 6px 0 var(--color-void)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/work/short-1.jpg",
					alt: "Short textured cut",
					className: "aspect-[3/4] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "pt-2 text-lg leading-none",
					style: {
						fontFamily: "var(--font-hand)",
						color: "var(--color-mist)"
					},
					children: "short + sweet"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-3 bottom-24 rotate-[8deg] rounded-full px-4 py-2 text-sm font-black",
				style: {
					background: "var(--color-flush)",
					color: "var(--color-bone)",
					boxShadow: "3px 3px 0 var(--color-void)",
					fontFamily: "var(--font-display)"
				},
				children: "house calls!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute -left-2 bottom-40 rotate-[-10deg] text-2xl",
				style: {
					fontFamily: "var(--font-hand)",
					color: "var(--color-flush)"
				},
				children: "real clients, real couches →"
			})
		]
	});
}
function ServiceWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-extrabold tracking-tight sm:text-6xl",
					style: { fontFamily: "var(--font-display)" },
					children: "the menu."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: "tap a card — each service gets its own page with the full rundown + photos."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((svc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					svc,
					index: i
				}, svc.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm",
				style: {
					fontFamily: "var(--font-mono)",
					color: "var(--color-ash)"
				},
				children: "all appointments are house calls right now — i bring the chair, the tools, and the gossip."
			})
		]
	});
}
function ServiceCard({ svc, index }) {
	const rotations = [
		-1.5,
		1,
		-.5,
		1.5,
		-1,
		.5,
		-1.5
	];
	const rot = rotations[index % rotations.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/services/$slug",
		params: { slug: svc.slug },
		className: "group block border-2 p-5 transition-transform hover:-translate-y-1",
		style: {
			background: "var(--color-card-2)",
			borderColor: "var(--color-void)",
			boxShadow: "5px 5px 0 var(--color-void)",
			transform: `rotate(${rot}deg)`
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block rounded-full px-3 py-1 text-sm font-black",
					style: {
						background: svc.accent,
						color: "var(--color-void)"
					},
					children: svc.price
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 12,
						color: "var(--color-ash)"
					},
					children: svc.duration
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-2xl font-black leading-tight tracking-tight",
				style: { fontFamily: "var(--font-display)" },
				children: svc.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				style: { color: "var(--color-mist)" },
				children: svc.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-bold transition-transform group-hover:translate-x-1",
				style: { color: "var(--color-flush)" },
				children: "the full rundown →"
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y-2",
		style: {
			background: "var(--color-void)",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:grid-cols-[.9fr_1.1fr] sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rotate-[-3deg] border-2 p-2",
					style: {
						background: "#fff",
						borderColor: "var(--color-bone)",
						boxShadow: "6px 6px 0 var(--color-lime)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/work/mykey.jpg",
						alt: "MyKey Pocket, Seattle hair artist",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "pt-2 text-lg leading-none",
						style: {
							fontFamily: "var(--font-hand)",
							color: "var(--color-mist)"
						},
						children: "hi, it's me — mykey"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-4 -top-4 rotate-[10deg] rounded-full px-3 py-1 text-xs font-black",
					style: {
						background: "var(--color-lime)",
						color: "var(--color-void)",
						boxShadow: "3px 3px 0 var(--color-void)"
					},
					children: "they/them"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 13,
						letterSpacing: "0.2em",
						color: "var(--color-lime)"
					},
					children: "THE ARTIST"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl",
					style: {
						fontFamily: "var(--font-display)",
						color: "var(--color-bone)"
					},
					children: "one brain. whole front desk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 text-base leading-relaxed",
					style: { color: "var(--color-ash)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "i'm mykey. i spent years cutting at rudy's barbershop, and i just left — which means if you sat in my chair there, this is where you book me now. same hands, same energy, way fewer hoops." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "pocket studio is one person: me. you text me, i text you back. no front desk, no phone tag, no \"let me check with my manager.\" house calls only while i hunt for the next chair — and honestly? i'm bringing the good scissors to your couch." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "every texture, every length, every \"i did something to my hair at 2am\" emergency. color especially — new color clients start with a consult so we plan it right instead of apologizing later." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 13
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border px-3 py-1",
							style: {
								borderColor: "var(--color-ash)",
								color: "var(--color-bone)"
							},
							children: "seattle, wa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border px-3 py-1",
							style: {
								borderColor: "var(--color-ash)",
								color: "var(--color-bone)"
							},
							children: "house calls only rn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border px-3 py-1",
							style: {
								borderColor: "var(--color-ash)",
								color: "var(--color-bone)"
							},
							children: "no travel fee yet"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:425-918-2029",
						className: "border-2 px-6 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "var(--color-lime)",
							borderColor: "var(--color-lime)",
							color: "var(--color-void)",
							boxShadow: "3px 3px 0 var(--color-violet-brand)"
						},
						children: "CALL/TEXT 425-918-2029"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "border-2 px-6 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5",
						style: {
							borderColor: "var(--color-bone)",
							color: "var(--color-bone)"
						},
						children: "BOOK ONLINE →"
					})]
				})
			] })]
		})
	});
}
function LatestDispatch() {
	const latest = UPDATES_NEWEST_FIRST[0];
	const rest = UPDATES_NEWEST_FIRST.slice(1);
	if (!latest) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-extrabold tracking-tight sm:text-6xl",
					style: { fontFamily: "var(--font-display)" },
					children: "from the chair."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "text-sm font-bold underline-offset-4 hover:underline",
					style: {
						color: "var(--color-flush)",
						fontFamily: "var(--font-mono)"
					},
					children: "all updates →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-10 rotate-[-0.5deg] border-2 p-6 sm:p-10",
				style: {
					background: "var(--color-card-2)",
					borderColor: "var(--color-void)",
					boxShadow: "8px 8px 0 var(--color-void)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full px-3 py-1 text-xs font-black",
							style: {
								background: "var(--color-lime)",
								color: "var(--color-void)"
							},
							children: "LATEST"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: latest.dateISO,
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 12,
								color: "var(--color-ash)",
								textTransform: "uppercase",
								letterSpacing: "0.1em"
							},
							children: latest.displayDate
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-2xl font-black leading-tight tracking-tight sm:text-4xl",
						style: { fontFamily: "var(--font-display)" },
						children: latest.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-lg leading-relaxed",
						style: { color: "var(--color-mist)" },
						children: latest.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed",
						style: { color: "var(--color-mist)" },
						children: latest.body[0]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "border-b-2 pb-0.5 text-base font-bold",
							style: {
								borderColor: "var(--color-flush)",
								color: "var(--color-flush)"
							},
							children: "read the dispatch →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							style: {
								fontFamily: "var(--font-hand)",
								color: "var(--color-flush)"
							},
							children: "— mykey"
						})]
					})
				]
			}),
			rest.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: rest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "block border-2 p-5 transition-transform hover:-translate-y-0.5",
					style: {
						background: "#fff",
						borderColor: "var(--color-void)",
						boxShadow: "4px 4px 0 var(--color-void)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: post.dateISO,
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								color: "var(--color-ash)",
								textTransform: "uppercase",
								letterSpacing: "0.1em"
							},
							children: post.displayDate
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-2 text-xl font-black leading-snug",
							style: { fontFamily: "var(--font-display)" },
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							style: { color: "var(--color-mist)" },
							children: post.excerpt
						})
					]
				}, post.slug))
			})
		]
	});
}
function BookingCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-5 pb-16 sm:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rotate-[0.5deg] border-2 p-6 sm:p-10",
			style: {
				background: "var(--color-card-2)",
				borderColor: "var(--color-void)",
				boxShadow: "8px 8px 0 var(--color-void)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black tracking-tight sm:text-5xl",
					style: { fontFamily: "var(--font-display)" },
					children: "booking with me ="
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: [
						{ q: "house calls only right now — i come to you." },
						{ q: "no travel fee for now — that'll change later, plenty of notice first." },
						{ q: "$25 deposit, applied to your total." },
						{ q: "calendar opens on the 1st for the full month ahead." }
					].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black",
							style: {
								background: "var(--color-lime)",
								color: "var(--color-void)"
							},
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg leading-relaxed",
							style: { color: "var(--color-mist)" },
							children: x.q
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "border-2 px-7 py-3 text-base font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "var(--color-void)",
							color: "var(--color-bone)",
							borderColor: "var(--color-void)",
							boxShadow: "4px 4px 0 var(--color-flush)"
						},
						children: "BOOK NOW →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CAL_BASE,
						target: "_blank",
						rel: "noreferrer",
						className: "border-2 px-7 py-3 text-base font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "transparent",
							borderColor: "var(--color-void)",
							color: "var(--color-void)"
						},
						children: "CAL.COM LINK ↗"
					})]
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 pb-16 sm:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-4xl font-extrabold tracking-tight sm:text-6xl",
			style: { fontFamily: "var(--font-display)" },
			children: "probably wondering."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 sm:grid-cols-2",
			children: [
				{
					q: "what exactly is a house call?",
					a: "you pick a spot with decent light and an outlet — kitchen, bathroom, living room, wherever. i show up with a chair, a cape, and all my tools, we do the cut, and i leave no trace. no salon, no commute, no waiting room."
				},
				{
					q: "is there a travel fee?",
					a: "not right now. while i'm hunting for a new chair, travel is on me — think of it as a thank-you for making the jump with me. when that changes, you'll hear it from me with plenty of notice."
				},
				{
					q: "how far will you come?",
					a: "anywhere in seattle proper, and i'm flexible beyond that — text me your neighborhood and we'll figure it out. if you're way out, we might split the difference on timing."
				},
				{
					q: "what's the deposit situation?",
					a: "$25, applied to your total. it just holds your slot — because no-shows make me sad and make other clients miss out."
				},
				{
					q: "i was your client at rudy's — how do i book now?",
					a: "right here. this site, the book page, or just text me at 425-918-2029. nothing else about us changes."
				},
				{
					q: "new to color — where do we start?",
					a: "with a consult, always. we talk, we look at your hair, we do a strand test if we need to. i plan color, i don't wing it — that's how you get the good outcome instead of the expensive apology."
				}
			].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-2 p-5",
				style: {
					background: i % 2 ? "#fff" : "var(--color-card-2)",
					borderColor: "var(--color-void)",
					boxShadow: "4px 4px 0 var(--color-void)",
					transform: `rotate(${i % 2 ? .5 : -.5}deg)`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-black",
					style: { fontFamily: "var(--font-display)" },
					children: f.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					style: { color: "var(--color-mist)" },
					children: f.a
				})]
			}, i))
		})]
	});
}
function Policies() {
	const line = "house calls only right now · no travel fee for now · $25 deposit holds your slot · calendar opens the 1st for the month ahead · cuts book 2 days out · new color = consult first · not affiliated with rudy's barbershop · ";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden border-y-2 py-4",
		style: {
			background: "var(--color-flush)",
			borderColor: "var(--color-void)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex whitespace-nowrap",
			style: { animation: "ps-marquee 28s linear infinite" },
			children: [0, 1].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pr-4 text-sm font-black tracking-wide",
				style: {
					fontFamily: "var(--font-mono)",
					color: "var(--color-bone)"
				},
				children: line.repeat(2)
			}, n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes ps-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }` })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		ref: (0, import_react.useRef)(null),
		className: "px-5 py-14",
		style: {
			background: "var(--color-void)",
			color: "var(--color-bone)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-10 sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-black tracking-tight",
						style: { fontFamily: "var(--font-display)" },
						children: "✂ POCKET STUDIO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xs text-sm leading-relaxed",
						style: { color: "var(--color-ash)" },
						children: "one artist, one calendar. mykey pocket (they/them), seattle hair artist — house calls only while the next chair gets hunted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-2xl",
						style: {
							fontFamily: "var(--font-hand)",
							color: "var(--color-lime)"
						},
						children: "see you in your living room ~"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-10 text-sm",
					style: { fontFamily: "var(--font-mono)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest",
						style: { color: "var(--color-ash)" },
						children: "BOOK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: "underline-offset-4 hover:underline",
								children: "book a slot"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CAL_BASE,
								target: "_blank",
								rel: "noreferrer",
								className: "underline-offset-4 hover:underline",
								children: "cal.com ↗"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:425-918-2029",
								className: "underline-offset-4 hover:underline",
								children: "425-918-2029"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:mykeypocket@icloud.com",
								className: "underline-offset-4 hover:underline",
								children: "mykeypocket@icloud.com"
							}) })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest",
						style: { color: "var(--color-ash)" },
						children: "PAGES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "underline-offset-4 hover:underline",
								children: "services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "underline-offset-4 hover:underline",
								children: "updates"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/studio",
								className: "underline-offset-4 hover:underline",
								children: "the studio"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/classic",
								className: "underline-offset-4 hover:underline",
								children: "classic version"
							}) })
						]
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between",
				style: {
					borderColor: "rgba(243,236,222,.15)",
					color: "var(--color-ash)",
					fontFamily: "var(--font-mono)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© pocket studio / mykey pocket · seattle, wa" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/classic/terms.html",
							className: "underline-offset-4 hover:underline",
							children: "terms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/classic/privacy.html",
							className: "underline-offset-4 hover:underline",
							children: "privacy"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "not affiliated with rudy's barbershop." })
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
