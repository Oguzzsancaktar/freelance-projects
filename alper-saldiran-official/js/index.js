$(window).on('load', async function () {
  gsap.to('#loader', 1, { y: '-100%' })
  gsap.to('#loader', 1, { opacity: 0 })
  gsap.to('#loader', 0, { display: 'none', delay: 1 })
  gsap.to('#header', 0, { display: 'block', delay: 1 })
  gsap.to('#navigation-content', 0, { display: 'none' })
  gsap.to('#navigation-content', 0, { display: 'flex', delay: 1 })

  $('#trLangButton').on('click', function () {
    localStorage.setItem('alperLang', 'tr')
    localize()
  })

  $('#enLangButton').on('click', function () {
    localStorage.setItem('alperLang', 'en')
    localize()
  })

  new AnimOnScroll(document.getElementById('grid'), {
    minDuration: 0.4,
    maxDuration: 0.7,
    viewportFactor: 0.2,
  })

  localize()
})

$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', 0.6, { y: 0 })
  })
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', 0.6, { y: '-100%' })
  })
})

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    var that = this
    var delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 100
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0em solid #666 ; }'
    document.body.appendChild(css)
  }
})
$(function () {
  $('#about-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 })
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 })
    gsap.to('#header', 0, { display: 'none' })
    gsap.to('#blog', 0, { display: 'none' })
    gsap.to('#portfolio', 0, { display: 'none' })
    gsap.to('#breaker', 0, { display: 'block' })
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 })
    gsap.to('#contact', 0, { display: 'none' })
    gsap.to('#breaker', 0, { display: 'none', delay: 2 })
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 })
    gsap.to('#about', 0, { display: 'block', delay: 0.7 })
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 3 })
  })
  $('#contact-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 })
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 })
    gsap.to('#header', 0, { display: 'none' })
    gsap.to('#about', 0, { display: 'none' })
    gsap.to('#blog', 0, { display: 'none' })
    gsap.to('#portfolio', 0, { display: 'none' })
    gsap.to('#breaker', 0, { display: 'block' })
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 })
    gsap.to('#breaker', 0, { display: 'none', delay: 2 })
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 })
    gsap.to('#contact', 0, { display: 'block', delay: 0.7 })
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 3 })
  })
  $('#portfolio-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 })
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 })
    gsap.to('#header', 0, { display: 'none' })
    gsap.to('#about', 0, { display: 'none' })
    gsap.to('#contact', 0, { display: 'none' })
    gsap.to('#blog', 0, { display: 'none' })
    gsap.to('#breaker', 0, { display: 'block' })
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 })
    gsap.to('#breaker', 0, { display: 'none', delay: 2 })
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 })
    gsap.to('#portfolio', 0, { display: 'block', delay: 0.7 })
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 3 })
  })
  $('#blog-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 })
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 })
    gsap.to('#header', 0, { display: 'none' })
    gsap.to('#about', 0, { display: 'none' })
    gsap.to('#portfolio', 0, { display: 'none' })
    gsap.to('#contact', 0, { display: 'none' })
    gsap.to('#breaker', 0, { display: 'block' })
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 })
    gsap.to('#breaker', 0, { display: 'none', delay: 2 })
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 })
    gsap.to('#blog', 0, { display: 'block', delay: 0.7 })
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 3 })

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 2000)
  })
  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: 'none', delay: 0.7 })
    gsap.to('#navigation-content', 0, { y: '-100%', delay: 0.7 })
    gsap.to('#header', 0, { display: 'none' })
    gsap.to('#about', 0, { display: 'none' })
    gsap.to('#portfolio', 0, { display: 'none' })
    gsap.to('#contact', 0, { display: 'none' })
    gsap.to('#blog', 0, { display: 'none' })
    gsap.to('#breaker', 0, { display: 'block' })
    gsap.to('#breaker-two', 0, { display: 'block', delay: 0.1 })
    gsap.to('#breaker', 0, { display: 'none', delay: 2 })
    gsap.to('#breaker-two', 0, { display: 'none', delay: 2 })
    gsap.to('#header', 0, { display: 'block', delay: 0.7 })
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 3 })
  })
})
$(function () {
  var body = document.querySelector('body')
  var $cursor = $('.cursor')
  function cursormover(e) {
    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.002,
    })
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1,
    })
  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: 0.6,
    })
  }
  $(window).on('mousemove', cursormover)
  $('.menubar').hover(cursorhover, cursor)
  $('a').hover(cursorhover, cursor)
  $('.navigation-close').hover(cursorhover, cursor)
})

const localize = async () => {
  const elements = document.querySelectorAll('[data-localization]')
  const alperLang = localStorage.getItem('alperLang')

  if (!alperLang) {
    localStorage.setItem('alperLang', lang)
  } else {
    lang = localStorage.getItem('alperLang')
  }

  const dataUrl = '/js' + '/' + alperLang + '.json'
  const data = await (await fetch(dataUrl)).json()

  if (lang === 'tr') {
    $('#trLangButton').addClass('color')
    $('#enLangButton').removeClass('color')
  } else {
    $('#enLangButton').addClass('color')
    $('#trLangButton').removeClass('color')
  }
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const key = element.getAttribute('data-localization')
    const word = data[key]
    element.innerHTML = word
    let temp = word
    temp = temp
      .replace('İ', 'I')
      .replace('ğ', 'g')
      .replace('ü', 'u')
      .replace('ş', 's')
      .replace('ı', 'i')
      .replace('ö', 'o')
      .replace('ç', 'c')
      .replace('Ğ', 'G')
      .replace('Ü', 'U')
      .replace('Ş', 'S')
      .replace('Ö', 'O')
      .replace('Ç', 'C')
    element.setAttribute('data-text', temp)
  }
}
