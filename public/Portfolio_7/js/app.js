$(document).ready(function () {

    // Ripples

    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })


    // Bars

    const bars = document.querySelectorAll('.progress__bar')

    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent
        let tooltip = bar.children[0]
        tooltip.innerText = percentage + '%'
        bar.style.width = percentage + '%'

        // console.log(percentage)
    })


    // Counter

    const counters = document.querySelectorAll('.counter')
    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0
            let target = +counter.dataset.count
            let step = target / 100

            let countIt = function () {
                let displayedCount = +counter.innerText
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step)
                    setTimeout(countIt, 1);

                    //console.log(displayedCount)
                } else {
                    counter.innerText = target;
                }
            }

            countIt()

            //console.log(target)
        })
    }

    let counterSection = document.querySelector('.counter__section')
    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = false

    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done === false) {
            done = true
            runCounter()

            //console.log('Intersecting...')
        }
    }, options)

    sectionObserver.observe(counterSection)

    //Alternative Counter
    //https://morioh.com/p/bd6b4702d394

    /*
    const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + inc;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
    */


    // Image Filter 

    var $wrapper = $('.portfolio__wrapper')

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    })

    let links = document.querySelectorAll('.tabs a')
    links.forEach(link => {

        let selector = link.dataset.filter
        //console.log(selector)
        link.addEventListener('click', function (e) {
            //console.log('something')
            e.preventDefault()

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            })

            links.forEach(link => [
                link.classList.remove('active')
            ])

            e.target.classList.add('active')

        })
    })


    // Magnific pop-up

    $('.magnific').magnificPopup({
        type: 'image',
        gallery: {
            enable: true
        },
        zoom: {
            enable: true
        }
    })

    // Slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    })
})