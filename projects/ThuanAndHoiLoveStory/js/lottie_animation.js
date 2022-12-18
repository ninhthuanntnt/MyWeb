var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('introduce-lottie-heart-animation'), // required
    path: 'lottie/heart-animation.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
});

var happyBirthDayBHGift = bodymovin.loadAnimation({
    container: document.getElementById('happy-birthday-bh-gift'), // required
    path: 'lottie/happy-giftbox.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
})