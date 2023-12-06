import { renderToString } from "preact-render-to-string";
import { createContext } from "preact";
import "preact/hooks";
import { jsx, jsxs } from "preact/jsx-runtime";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
const Context = createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
const PageShell$1 = "";
const pdf = "/jj-personal-website/assets/static/RESUME--CS----Jun-Jie-Wong.dea02a8c.pdf";
const pic = "/jj-personal-website/assets/static/jjheadshot.5a800107.jpg";
const linkedin = "/jj-personal-website/assets/static/linkedin-icon.8d743f0f.png";
const github = "/jj-personal-website/assets/static/github-icon.d83ddf4e.png";
const locationIcon = "/jj-personal-website/assets/static/location-icon.3584afc6.png";
const mailIcon = "/jj-personal-website/assets/static/mail-icon.ff3cc82c.png";
function PageShell({
  pageContext,
  children
}) {
  return jsxs(PageContextProvider, {
    pageContext,
    children: [jsx(Header, {
      url: pageContext.urlPathname
    }), jsx("div", {
      style: {
        minWidth: "310px"
      }
    }), jsx("main", {
      children
    })]
  });
}
function Header({
  url
}) {
  return jsxs("header", {
    children: [jsxs("div", {
      id: "profile-card",
      children: [jsx("img", {
        src: pic,
        width: "100px",
        height: "100px",
        alt: "head shot of Jun Jie Wong"
      }), jsx("h1", {
        children: "Jun Jie Wong"
      }), jsx("h3", {
        children: "Aspiring Software/Web Developer"
      })]
    }), jsx("nav", {
      id: "links",
      children: jsxs("ul", {
        children: [jsx("li", {
          children: jsx("img", {
            style: {
              marginBottom: 0
            },
            src: locationIcon,
            alt: "location icon"
          })
        }), jsx("li", {
          children: jsx("p", {
            children: "Athens, GA"
          })
        }), jsx("li", {
          children: jsx("img", {
            style: {
              marginBottom: 0
            },
            src: mailIcon,
            alt: "location icon"
          })
        }), jsx("li", {
          children: jsx("a", {
            id: "mail",
            href: "mailto:junjiewong.99@gmail.com",
            children: "junjiewong.99@gmail.com"
          })
        })]
      })
    }), jsx("hr", {
      id: "divider"
    }), jsxs("nav", {
      id: "nav",
      children: [jsx("a", {
        href: "#about-me-section",
        children: "About Me"
      }), jsx("a", {
        href: "#academic-section",
        children: "Education"
      }), jsx("a", {
        href: "#project-section",
        children: "Projects"
      }), jsx("a", {
        href: "#exp-section",
        children: "Experience"
      })]
    }), jsx("a", {
      href: pdf,
      download: "Jun Jie Wong - RESUME.pdf",
      id: "dl",
      children: "Download CV"
    }), jsx("hr", {
      id: "divider"
    }), jsx("h1", {
      id: "grid-title",
      children: "Technical"
    }), jsxs("div", {
      class: "language-grid",
      children: [jsxs("h2", {
        children: ["Java ", jsx("div", {
          class: "progress five"
        })]
      }), jsxs("h2", {
        children: ["React ", jsx("div", {
          class: "progress five"
        })]
      }), jsxs("h2", {
        children: ["HTML ", jsx("div", {
          class: "progress four"
        })]
      }), jsxs("h2", {
        children: ["CSS ", jsx("div", {
          class: "progress four"
        })]
      }), jsxs("h2", {
        children: ["Javascript ", jsx("div", {
          class: "progress four"
        })]
      }), jsxs("h2", {
        children: ["Git ", jsx("div", {
          class: "progress four"
        })]
      })]
    }), jsx("h1", {
      id: "grid-title",
      children: "Language"
    }), jsxs("div", {
      class: "language-grid",
      children: [jsxs("h2", {
        children: ["English ", jsx("div", {
          class: "progress five"
        })]
      }), jsxs("h2", {
        children: ["Mandarin ", jsx("div", {
          class: "progress four"
        })]
      }), jsxs("h2", {
        children: ["Malay ", jsx("div", {
          class: "progress four"
        })]
      }), jsxs("h2", {
        children: ["German ", jsx("div", {
          class: "progress two"
        })]
      })]
    }), jsxs("div", {
      class: "socials",
      children: [jsx("a", {
        class: "button-link",
        target: "_blank",
        href: "https://www.linkedin.com/in/jw27180/",
        children: jsx("img", {
          src: linkedin,
          alt: "linkedin logo"
        })
      }), jsx("a", {
        class: "button-link",
        target: "_blank",
        href: "https://www.github.com/meeracleEXE",
        children: jsx("img", {
          src: github,
          alt: "github logo"
        })
      })]
    })]
  });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = renderToString(jsx(PageShell, {
    pageContext,
    children: jsx(Page, {
      ...pageProps
    })
  }));
  const {
    documentProps
  } = pageContext.exports;
  const title = documentProps && documentProps.title || "Jun Jie Wong";
  const desc = documentProps && documentProps.description || "Personal Website for Jun Jie Wong";
  const documentHtml = escapeInject`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<link rel="icon" type="image/svg+xml" href="/vite.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="color-scheme" content="light dark" />
			<meta name="description" content="${desc}" />
			<title>${title}</title>
		</head>
		<body>
			<div id="app">${dangerouslySkipEscape(pageHtml)}</div>
		</body>
		</html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
