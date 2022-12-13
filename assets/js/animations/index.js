import { qs, qsa } from '~/assets/js/utils/generic'
import { gsap, Power4 } from 'gsap'
import { SplitText } from 'gsap/SplitText'

if (process.client) {
  gsap.registerPlugin(SplitText)
}

const menuGallery = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true })

  const sub = qs('p', el)
  const main = qs('h1', el)
  const cards = qsa('[data-card]', el)
  const items = qsa('[data-items]', el)

  let subSplit,
      mainSplit

  tl.add('start')

  if (sub) {
    sub.style.overflow = 'hidden'
    subSplit = new SplitText(sub, { type: 'lines', linesClass: 'overflow-hidden' })

    tl
      .from(subSplit.lines, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut
      }, 'start+=0.4')
  }

  if (main) {
    mainSplit = new SplitText(main, { type: 'chars, lines' })
    mainSplit.lines.forEach(line => {
      line.style.overflow = 'hidden'
      // line.style.paddingBottom = '8px'
    })

    tl.from(mainSplit.chars, { duration: 1.2,yPercent: 100, ease: Power4.easeOut, stagger: 0.02}, 'start+=0.8')
  }

  if (items.length) {
    tl
      .from(items, {
        duration: 1.2,
        y: 16,
        autoAlpha: 0,
        stagger: 0.04,
        ease: Power4.easeOut
      }, `start+=${sub && main ? '2' : '0.8'}`)
  }

  tl
    .set([cards[cards.length - 1], cards[0], cards[1]], { yPercent: 100 }, `start`)
    .to([cards[cards.length - 1], cards[0], cards[1]], {
      duration: 1.2,
      yPercent: 0,
      ease: Power4.easeOut,
      stagger: 0.1,
    }, `start+=${sub && main ? '1.6' : '0.4'}`)

  return tl
}

const gallery = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true })

  const cards = qsa('[data-card]', el)

  tl.add('start')

  tl
    .set([cards[cards.length - 1], cards[0], cards[1]], { yPercent: 100 }, `start`)
    .to([cards[cards.length - 1], cards[0], cards[1]], {
      duration: 1.2,
      yPercent: 0,
      ease: Power4.easeOut,
      stagger: 0.1,
    }, `start`)

  return tl
}

const hero = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true })
  tl.add('start')

  const sub = qs('[data-s-t]', el)
  const mainCont = qs('[data-m-t]', el)
  const main = qsa('h1, h2, h3, h4, h5, h6, p', mainCont)
  const card = qs('[data-card]', el)

  let subSplit

  if (sub) {
    sub.style.overflow = 'hidden'
    subSplit = new SplitText(sub, { type: 'lines', linesClass: 'overflow-hidden' })

    tl
      .from(subSplit.lines, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut
      }, 'start+=0.4')
  }

  if (main.length) {
    main.forEach((item, i) => {
      let splits = []
      const itemSplit = new SplitText(item, { type: 'lines, chars', linesClass: 'overflow-hidden' })
      itemSplit.lines.forEach(line => {
        line.style.overflow = 'hidden'
      })

      tl
      .from(itemSplit.chars, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut,
        stagger: 0.02
      }, `start+=${`${(0.6 * i) + 0.6}`}`)
    })
  }

  tl
  .set(card, { yPercent: 100 }, `start`)
  .to(card, {
    duration: 1.2,
    yPercent: 0,
    ease: Power4.easeOut,
  }, `start+=${sub && main ? '1.6' : '0'}`)

  return tl
}

const bgText = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true })

  const sub = qsa('p', el)
  const main = qs('h2', el)

  let subSplit,
      mainSplit

  tl.add('start')

  if (sub.length) {
    subSplit = []
    sub.forEach((item, i) => {
      let splits = []
      const itemSplit = new SplitText(item, { type: 'lines', linesClass: 'overflow-hidden' })

      subSplit.push(itemSplit)

      itemSplit.lines.forEach(line => {
        const newSplit = new SplitText(line, { type: 'lines' })
        splits.push(newSplit.lines[0])
      })
      const tl = gsap.timeline()

      tl
      .from(splits, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut,
        stagger: 0.08,
        onComplete: () => {
          subSplit.forEach(item => { item.revert() })
        }
      }, `start+=${main ? '0.8' : '0.4'}`)
    })
  }

  if (main) {
    mainSplit = new SplitText(main, { type: 'chars, lines' })
    mainSplit.lines.forEach(line => {
      line.style.overflow = 'hidden'
    })

    tl.from(mainSplit.chars, { duration: 1.2,yPercent: 100, ease: Power4.easeOut, stagger: 0.02 }, 'start+=0.2')
  }

  return tl
}

const text = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  let splits = []
  let lines = []
  const tl = gsap.timeline({ paused: true, delay: (delay && window.innerWidth < 1024 ? delay : 0) })
  const items = qsa('p', el)

  tl.add('start')

   if (items.length) {
    items.forEach((item, i) => {
      const itemSplit = new SplitText(item, { type: 'lines', linesClass: 'overflow-hidden' })

      splits.push(itemSplit)

      itemSplit.lines.forEach((line, ix) => {
        const lineSplit = new SplitText(line, { type: 'lines' })

        lines.push(lineSplit.lines[0])
      })
    })

    tl
      .from(lines, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut,
        stagger: 0.08,
        onComplete: () => {
          // splits.forEach(split => { split.revert() })
        }
      }, `start`)
  }

  return tl
}

const newsTitle = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline()
  const title = qs('h2', el)

  const split = new SplitText(title, { type: 'lines, chars', linesClass: 'overflow-hidden' })

  tl
    .from(el, {
      duration: 0.8,
      scaleX: 0,
      transformOrigin: 'center center',
      ease: Power4.easeOut,
      delay: 0.2
    })
    .from(split.chars, {
      duration: 1.2,
      yPercent: 100,
      stagger: 0.08,
      ease: Power4.easeOut
    }, '-=0.6')

  return tl
}

const newsCard = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  let lines = []
  const tl = gsap.timeline({ delay })

  const date = qs('[data-date]', el)
  const background = qs('[data-background]', el)
  const title = qs('h5', el)
  const arrow = qs('[data-arrow]', el)

  tl.add('start')

  if (date) {
    console.log(date, 'date')
    const dateSplit = new SplitText(date, { type: 'lines, chars', linesClass: 'overflow-hidden' })

    tl
      .from(dateSplit.chars, {
        duration: 1.2,
        yPercent: 100,
        stagger: 0.02,
        ease: Power4.easeOut,
        onComplete: () => {
          dateSplit.revert()
        }
      }, 'start')
  }

  const titleSplit = new SplitText(title, { type: 'lines', linesClass: 'overflow-hidden' })

  titleSplit.lines.forEach(line => {
    const lineSplit = new SplitText(line, { type: 'lines' })

    lines.push(lineSplit.lines[0])
  })

  tl
    .from(background, {
      duration: 1.2,
      yPercent: 110,
      ease: Power4.easeOut,
      onComplete: () => {
        gsap.set(background, { clearProps: 'all' })
      }
    }, 'start+=0.4')
    .from(lines, {
      duration: 1.2,
      yPercent: 100,
      stagger: 0.02,
      ease: Power4.easeOut,
      onComplete: () => {
        // titleSplit.revert()
      }
    }, 'start+=0.8')
    .from(arrow, {
      duration: 1.2,
      yPercent: 100,
      ease: Power4.easeOut
    }, 'start+=1')

  return tl
}

const titleSubtitle = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true })
  tl.add('start')

  const sub = qs('p', el)
  const main = qsa('h1', el)

  let subSplit

  if (sub) {
    sub.style.overflow = 'hidden'
    subSplit = new SplitText(sub, { type: 'lines', linesClass: 'overflow-hidden' })

    tl
      .from(subSplit.lines, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut
      }, 'start')
  }

  if (main.length) {
    main.forEach((item, i) => {
      let splits = []
      const itemSplit = new SplitText(item, { type: 'lines, chars', linesClass: 'overflow-hidden' })
      itemSplit.lines.forEach(line => {
        line.style.overflow = 'hidden'
      })

      tl
      .from(itemSplit.chars, {
        duration: 1.2,
        yPercent: 100,
        ease: Power4.easeOut,
        stagger: 0.02
      }, `start+=${`${(0.4 * i) + 0.4}`}`)
    })
  }

  return tl
}

const yearBlock = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true, delay: 0.2 })

  const label = qs('h2', el)
  const labelSplit = new SplitText(label, { type: 'lines, chars', linesClass: 'overflow-hidden' })

  tl
    .from(el, {
      autoAlpha: 0,
      duration: 0.8,
      ease: Power4.easeOut
    })
    .from(labelSplit.chars, {
      duration: 0.8,
      yPercent: 100,
      stagger: 0.02
    }, '-=0.4')

  return tl
}

const quote = (el, delay, scrollEl) => {
  gsap.set(el, { autoAlpha: 1 })
  let subLines = []
  let subClips = []
  const tl = gsap.timeline({ paused: true, delay: 0.2 })
  const quote = qs('p', el)
  const svgs = qsa('svg', el)

  const quoteSplit = new SplitText(quote, { type: 'lines', linesClass: 'overflow-hidden' })

  quoteSplit.lines.forEach(line => {
    const subSplit = new SplitText(line, { type: 'lines' })
    subLines.push(subSplit.lines[0])

    const newDiv = document.createElement('div')
    const text = document.createTextNode(subSplit.lines[0].innerHTML)

    line.style.position = 'relative'

    newDiv.style.position = 'absolute'
    newDiv.style.top = '0'
    newDiv.style.left = '0'
    newDiv.style.textAlign = 'center'
    newDiv.style.width = '100%'
    newDiv.style.color = 'var(--color-light)'
    newDiv.style.webkitTextFillColor = 'var(--color-light)'
    newDiv.setAttribute('data-clip', 'true')
    // newDiv.style.clipPath = 'inset(0 100% 0 0)'

    newDiv.appendChild(text)
    subClips.push(newDiv)
    line.appendChild(newDiv)
  })

  tl
    .add('start')
    .from(subLines, {
      duration: 1.2,
      yPercent: 102,
      ease: Power4.easeOut,
      stagger: 0.08
    }, 'start')
    .from(subClips, {
      duration: 1.2,
      yPercent: 102,
      ease: Power4.easeOut,
      stagger: 0.08
    }, 'start')
    .from(svgs, {
      duration: 1.2,
      autoAlpha: 0,
      x: i => (i % 2 === 0 ? -16 : 16),
      ease: Power4.easeOut
    }, '-=0.4')

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      scroller: scrollEl,
      scrub: true,
      start: "top 50%",
      end: "top top"
    }
  })

  scrollTl
    .fromTo(subClips, {
      webkitClipPath: 'inset(0% 100% 0.002% 0.003%)',
      clipPath: 'inset(0% 100% 0.002% 0.003%)'
    }, {
      webkitClipPath: 'inset(0% 0.001% 0.002% 0.003%)',
      clipPath: 'inset(0% 0.001% 0.002% 0.003%)',
      stagger: 0.06
    })

  return tl
}

const doubleText = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  let subLines = []
  let animLines = []

  const tl = gsap.timeline({ paused: true, delay: 0.2 })

  const sub = qsa('p', el)
  const main = qs('h1, h2, h3, h4, h5, h6', el)

  sub.forEach(subLine => {
    const subLineSplit = new SplitText(subLine, { type: 'lines', linesClass: 'overflow-hidden' })
    subLines.push(subLineSplit)

    subLineSplit.lines.forEach(line => {
      const lineSplit = new SplitText(line, { type: 'lines' })
      animLines.push(lineSplit.lines[0])
    })
  })

  const mainLineSplit = new SplitText(main, { type: 'lines, chars', linesClass: 'overflow-hidden' })

  tl
    .from(mainLineSplit.chars, {
      duration: 1.2,
      yPercent: 100,
      ease: Power4.easeOut,
      stagger: 0.08,
      onComplete: () => {
        mainLineSplit.revert()
      }
    })
    .from(animLines, {
      duration: 1.2,
      yPercent: 100,
      ease: Power4.easeOut,
      stagger: 0.08,
      onComplete: () => {
        subLines.forEach(line => { line.revert() })
      }
    }, '-=0.8')

  return tl
}

const linedTitle = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true })

  const title = qs('h1', el)
  const lines = qsa('span', el)

  const titleSplit = new SplitText(title, { type: 'lines, chars', linesClass: 'overflow-hidden' })

  tl
    .from(lines, {
      duration: 1.2,
      scale: 0,
      transformOrigin: 'center center',
      ease: Power4.easeOut
    })
    .from(titleSplit.chars, {
      duration: 1.2,
      yPercent: 120,
      ease: Power4.easeOut,
      stagger: 0.08
    }, '-=0.8')

  return tl
}

const fade = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })
  const tl = gsap.timeline({ paused: true, delay: 0.2 })

  tl
    .from(el, {
      duration: 1.2,
      autoAlpha: 0,
      y: 40,
      ease: Power4.easeOut
    })

  return tl
}

const nav = (el, delay) => {
  gsap.set(el, { autoAlpha: 1 })

  tl.add('start')

  const items = qsa('li', el)

  items.forEach((item, i) => {
    const a = qs('a', item)
    const lines = qsa('[data-line]', item)

    const aSplit = new SplitText(a, { type: 'lines, chars', linesClass: 'overflow-hidden' })

    tl
      .set(lines, { scaleX: 0 }, 'start')
      .from(lines, {
        duration: 1.2,
        scaleX: 0,
        ease: Power4.easeOut,
        onComplete: () => {
          gsap.set(lines, { clearProps: 'all' })

          lines.forEach(line => {
            line.style.transition = 'all 0.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)'
          })
        }
      }, `start+=${0.4 + (i * 0.06)}`)
      .from(aSplit.chars, {
        duration: 1.2,
        yPercent: 100,
        stagger: 0.02,
        ease: Power4.easeOut
      }, `start+=${0.6 + (i * 0.06)}`)
  })

  // items.forEach((item, i) => {
  //   const p = qs('p', item)
  //   const lines = qsa('[data-line]', item)
  //   const span = qs('[data-additional]', item)

  //   const pSplit = new SplitText(p, { type: 'lines, chars', linesClass: 'overflow-hidden' })
  //   const spanSplit = new SplitText(span, { type: 'lines, chars', linesClass: 'overflow-hidden' })

  //   console.log(lines)

  //   tl
  //     .set(lines, { scaleX: 0 }, 'start')
  //     .from(lines, {
  //       duration: 1.2,
  //       scaleX: 0,
  //       ease: Power4.easeOut,
  //       onComplete: () => {
  //         gsap.set(lines, { clearProps: 'all' })

  //         lines.forEach(line => {
  //           line.style.transition = 'all 0.8s cubic-bezier(0.165, 0.840, 0.440, 1.000)'
  //         })
  //       }
  //     }, `start+=${0.4 + (i * 0.06)}`)
  //     .from([...pSplit.chars, ...spanSplit.chars], {
  //       duration: 1.2,
  //       yPercent: 100,
  //       stagger: 0.02,
  //       ease: Power4.easeOut
  //     }, `start+=${0.6 + (i * 0.06)}`)
  // })

  return tl
}

const loaderIn = (done) => {
  const loader = qs('[data-loader]')
  const svgs = qsa('svg', loader)

  const tl = gsap.timeline({ paused: true, onComplete: done })

  tl
    .fromTo(loader, {
      autoAlpha: 0
    }, {
      duration: 0.8,
      autoAlpha: 1,
      ease: Power4.easeOut
    })
    .fromTo(svgs, {
      autoAlpha: 0
    }, {
      duration: 1.4,
      autoAlpha: 1,
      stagger: 0.2,
      ease: Power4.easeOut
    })

  return tl
}

const loaderOut = (done) => {
  const loader = qs('[data-loader]')
  const svgs = qsa('svg', loader)

  const tl = gsap.timeline({ paused: true, onComplete: done })

  tl
    .to(svgs, {
      duration: 1.4,
      autoAlpha: 0,
      stagger: 0.2,
      ease: Power4.easeOut
    })
    .to(loader, {
      duration: 0.8,
      autoAlpha: 0,
      ease: Power4.easeOut
    })

  return tl
}

const firstEnterLoader = (done) => {
  const loader = qs('[data-loader]')
  const svgs = qsa('svg', loader)

  const tl = gsap.timeline({ paused: true, onComplete: done })

  tl
    .fromTo(svgs, {
      autoAlpha: 0
    }, {
      duration: 1.4,
      autoAlpha: 1,
      stagger: 0.2,
      ease: Power4.easeOut
    })
    .to(svgs, {
      duration: 1.4,
      autoAlpha: 0,
      stagger: 0.2,
      ease: Power4.easeOut
    }, '+=1')
    .to(loader, {
      duration: 0.8,
      autoAlpha: 0,
      ease: Power4.easeOut
    })

  return tl
}


const animations = new Map()

animations.set('menuGallery', menuGallery)
animations.set('gallery', gallery)
animations.set('bgText', bgText)
animations.set('hero', hero)
animations.set('text', text)
animations.set('newsTitle', newsTitle)
animations.set('newsCard', newsCard)
animations.set('titleSubtitle', titleSubtitle)
animations.set('yearBlock', yearBlock)
animations.set('quote', quote)
animations.set('doubleText', doubleText)
animations.set('linedTitle', linedTitle)
animations.set('nav', nav)
animations.set('fade', fade)
animations.set('loaderIn', loaderIn)
animations.set('loaderOut', loaderOut)
animations.set('firstEnterLoader', firstEnterLoader)

export default animations
