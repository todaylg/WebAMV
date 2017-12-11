import { TimelineMax, TweenLite } from "gsap";
import BeginSakura from "./Sakura/";
import {removeEle, mediePlay} from "./Util";

let skipFlag = false;
// 手机端处理
if (document.documentElement.clientWidth < 800) {
    skipFlag = true;
    removeEle("loading");
    removeEle("animeScene");
    TweenLite.to('.bgMask', 3, {
        height: "0%",
        ease: Power2.easeInOut,
        onStart:()=>{
            BeginSakura();
        },
        onComplete:()=>{
            removeEle("bgMaskTop");
            removeEle("bgMaskBottom");
            buttonAnime();
        }
    })
    //没有适配
    removeEle("blogBtn");
    removeEle("aboutBtn");
    removeEle("animeBtn");
}
function preLoad(){
    let startTime = new Date(),timeOutFlag = false;
    setTimeout(() => {
        if(!timeOutFlag){
            timeOutFlag = true;
            Begin();
        }
    }, 8000);
    let imgArr = document.getElementsByTagName("img");
    let len = imgArr.length,count=0;
    for(let i=0;i<len;i++){
        let tempImg = new Image();
        tempImg.src = imgArr[i].src;
        tempImg.onload = ()=>{
            count++;
            updateLoad(Math.floor(count/len/2*100));
            if(count >= len) preLoadVideo();
        }
    }
    function preLoadVideo(){
        let videoArr = document.getElementsByTagName("video");
        videoArr = Array.from(videoArr);
        let len = videoArr.length,count=0;
        //BGM
        videoArr.push(document.getElementById("bgm"));
        for(let i=0;i<len;i++){
            videoArr[i].oncanplaythrough = ()=>{
                count++;
                updateLoad(Math.floor((count/len/2)*100+50));
                if(count >= len-1 &&!timeOutFlag){
                    timeOutFlag = true;
                    Begin();
                }
            }
        }
    }
}

function updateLoad(num){
    let loadNum = document.getElementById("loadNum"),
        loadBar = document.getElementById("loadBar");
    if(loadNum) loadNum.innerText = num+"%";
    if(loadBar) loadBar.style.width = num+"%";
}

function skipEvent(){
    let skipBtn = document.getElementById("skipBtn");
    if(!skipBtn || skipFlag===true) return;
    skipBtn.addEventListener("click",function skipAnime(){
        skipFlag = true;
        skipBtn.removeEventListener("click", skipAnime);
        removeEle("animeScene");
        TweenLite.to('.bgMask', 3, {
            height: "0%",
            ease: Power2.easeInOut,
            onStart:()=>{
                BeginSakura();
            },
            onComplete:()=>{
                removeEle("bgMaskTop");
                removeEle("bgMaskBottom");
                buttonAnime();
            }
        })
    })
}

function Begin() {
    skipEvent();
    //动画片段时长 = 延迟时间+上一个片段持续时间+上一个动画持续时间
    TweenLite.delayedCall(0, ()=> {
        animePartA();
    })
    TweenLite.delayedCall(3.1, ()=> {
        animePartB();
    })
    TweenLite.delayedCall(6.4, ()=> {
        animePartC();
    })
    TweenLite.delayedCall(9.1, ()=> {
        animePartD();
    })
    TweenLite.delayedCall(12.6, ()=> {
        animePartE();
    })
    TweenLite.delayedCall(23.6, ()=> {
        animePartF();
    })

    function animePartA(){
        if (skipFlag) return;
        TweenLite.to('#loading', 0.5, {
            top: "100%",
            ease: Power2.easeInOut,
            onStart: () => {
                mediePlay("bgm");
                mediePlay("firstVideo");
                removeEle("load");
            },
            onComplete: () => {
                removeEle("loading");
            }
        })
    }
    function animePartB(){
        if (skipFlag) return;
        TweenLite.to('#firstMask', 1, {
            width: "20%",
            ease: Power3.easeOut,
            onStart: () => {
                if (skipFlag) return;
                TweenLite.to('#firstTextTop', 1, {
                    opacity: 1,
                    marginLeft: "5%"
                })
                TweenLite.to('#firstTextBottom', 1, {
                    opacity: 1,
                    marginLeft: "35%",
                    delay: 0.5
                })
            }
        })
    }
    function animePartC(){
        if (skipFlag) return;
        TweenLite.to('#firstMask', 0.6, {
            width: "100%",
            ease: Power3.easeInOut,
            onStart: () => {
                if (skipFlag) return;
                TweenLite.to('#firstText', 0.6, {
                    opacity: 0,
                    left: "10%",
                    ease: Power3.easeInOut,
                })
            },
            onComplete: () => {
                removeEle("firstText");
                removeEle("firstMask");
                removeEle("firstVideo");
            }
        })
        TweenLite.to('#secondMask', 1.5, {
            width: "20%",
            ease: Power3.easeOut,
            delay:0.6,
            onStart: () => {
                if (skipFlag) return;
                mediePlay("secondVideo");
                TweenLite.to('#secondTextTop', 1, {
                    opacity: 1,
                    marginLeft: "5%",
                    delay: 0.5
                })
                TweenLite.to('#secondTextBottom', 1, {
                    opacity: 1,
                    marginLeft: "35%",
                    delay: 1.1
                })
            }
        })
    }
    function animePartD(){
        if (skipFlag) return;
        TweenLite.to('#secondMask', 1.5, {
            width: "0%",
            ease: Power3.easeInOut,
            onStart: () => {
                if (skipFlag) return;
                TweenLite.to('#secondText', 0.6, {
                    opacity: 0,
                    right: "-10%",
                    ease: Power3.easeInOut,
                })
            },
            onComplete: () => {
                removeEle("secondText");
            }
        })
    }
    function animePartE(){
        if (skipFlag) return;
        TweenLite.to('.second', 1.0, {
            bottom: "150%",
            ease: Power4.easeInOut,
            onComplete: () => {
                removeEle("secondMask");
                removeEle("secondVideo");
            },
            onStart: () => {
                if (skipFlag) return;
                TweenLite.delayedCall(7.5, function () {
                    finTextAnime();
                });
                TweenLite.to('#MyWork', 0.8, {
                    top: "0%",
                    onStart: () => {
                        TweenLite.delayedCall(0.2, function () {
                            mediePlay("MyWork");
                        });
                    },
                    onComplete: () => {
                        TweenLite.to('#MyWork', 0.3, {
                            opacity: 0,
                            delay: 8,
                            onComplete: () => {
                                removeEle("MyWork");
                                BeginSakura();
                            }
                        })
                    }
                })
            }
        })
    }
    function animePartF(){
        if (skipFlag) return;
        TweenLite.to('.bgMask', 3, {
            height: "0%",
            ease: Power2.easeInOut,
            onComplete:()=>{
                removeEle("bgMaskTop");
                removeEle("bgMaskBottom");
                buttonAnime();
            }
        })
    }
}

function finTextAnime() {
    let o = 1.4, u = 1.2, a = 1, a2 = 3.5,
        l = Power1.easeInOut,
        c = Power1.easeIn;
    //finText
    TweenLite.set("#finText", {
        opacity: 1
    })
    TweenLite.fromTo("#finText .t1", o + .03, {
        opacity: 0,
        x: -30,
        y: -90,
        scale: .3,
        rotationY: 130,
        rotationX: 230,
        rotationZ: 100,
        rotation: 100
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .1
        });
    TweenLite.fromTo("#finText .t2", o + .03, {
        opacity: 0,
        x: -20,
        y: -70,
        scale: .3,
        rotationY: -80,
        rotationX: -230,
        rotationZ: 100,
        rotation: 180
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .15
        });
    TweenLite.fromTo("#finText .t3", o + .03, {
        opacity: 0,
        x: -10,
        y: -120,
        scale: .3,
        rotationY: 100,
        rotationX: 230,
        rotationZ: 100,
        rotation: -120
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .2
        });
    TweenLite.fromTo("#finText .t4", o + .03, {
        opacity: 0,
        x: -0,
        y: -140,
        scale: .3,
        rotationY: -150,
        rotationX: -230,
        rotationZ: 100,
        rotation: 180
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .25
        });
    TweenLite.fromTo("#finText .t5", o + .03, {
        opacity: 0,
        x: 10,
        y: -80,
        scale: .3,
        rotationY: 120,
        rotationX: 230,
        rotationZ: 100,
        rotation: -180
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .3
        });
    TweenLite.fromTo("#finText .t6", o + .03, {
        opacity: 0,
        x: 20,
        y: -50,
        scale: .3,
        rotationY: -100,
        rotationX: -230,
        rotationZ: 100,
        rotation: 50
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .35
        });
    TweenLite.fromTo("#finText .t7", o + .03, {
        opacity: 0,
        x: 30,
        y: -110,
        scale: .3,
        rotationY: 130,
        rotationX: 230,
        rotationZ: 100,
        rotation: 100
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .4
        });
    TweenLite.fromTo("#finText .t8", o + .03, {
        opacity: 0,
        x: 40,
        y: -130,
        scale: .3,
        rotationY: -80,
        rotationX: -230,
        rotationZ: 100,
        rotation: 180
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .45
        });
    TweenLite.fromTo("#finText .t9", o + .03, {
        opacity: 0,
        x: -10,
        y: 120,
        scale: .3,
        rotationY: 100,
        rotationX: 230,
        rotationZ: 100,
        rotation: -120
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .2
        });
    TweenLite.fromTo("#finText .t10", o + .03, {
        opacity: 0,
        x: -0,
        y: 140,
        scale: .3,
        rotationY: -150,
        rotationX: -230,
        rotationZ: 100,
        rotation: 180
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .25
        });
    TweenLite.fromTo("#finText .t11", o + .03, {
        opacity: 0,
        x: 10,
        y: 80,
        scale: .3,
        rotationY: 120,
        rotationX: 230,
        rotationZ: 100,
        rotation: -180
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .3
        });
    TweenLite.fromTo("#finText .t12", o + .03, {
        opacity: 0,
        x: 20,
        y: 50,
        scale: .3,
        rotationY: -100,
        rotationX: -230,
        rotationZ: 100,
        rotation: 50
    }, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            rotation: 0,
            ease: l,
            delay: a + .35
        });
    //Over
    TweenLite.to("#finText .t1", u, {
        opacity: 0,
        x: Math.random() * 60 - 150,
        y: -150 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: 150,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.10
    });
    TweenLite.to("#finText .t2", u, {
        opacity: 0,
        x: Math.random() * 60 - 100,
        y: -150 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: -180,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.12
    });
    TweenLite.to("#finText .t3", u, {
        opacity: 0,
        x: Math.random() * 60 - 50,
        y: -150 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: 100,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.18
    });
    TweenLite.to("#finText .t4", u, {
        opacity: 0,
        x: Math.random() * 60 - 30,
        y: -150 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: 140,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.12
    });
    TweenLite.to("#finText .t5", u, {
        opacity: 0,
        x: Math.random() * 60 - 0,
        y: -150 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: -100,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.18
    });
    TweenLite.to("#finText .t6", u, {
        opacity: 0,
        x: Math.random() * 60 + 30,
        y: -250 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: 30,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.12
    });
    TweenLite.to("#finText .t7", u, {
        opacity: 0,
        x: Math.random() * 60 + 50,
        y: -250 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: -120,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.18
    });
    TweenLite.to("#finText .t8", u, {
        opacity: 0,
        x: Math.random() * 60 + 50,
        y: -250 + Math.random() * 100 - 50,
        scale: .2,
        rotationY: 100,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.1
    });
    TweenLite.to("#finText .t9", u, {
        opacity: 0,
        x: Math.random() * 60 - 50,
        y: 120 + Math.random() * 100,
        scale: .2,
        rotationY: 100,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.18
    });
    TweenLite.to("#finText .t10", u, {
        opacity: 0,
        x: Math.random() * 60 - 30,
        y: 110 + Math.random() * 100,
        scale: .2,
        rotationY: 140,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.12
    });
    TweenLite.to("#finText .t11", u, {
        opacity: 0,
        x: Math.random() * 60 - 0,
        y: 120 + Math.random() * 100,
        scale: .2,
        rotationY: -100,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.18
    });
    TweenLite.to("#finText .t12", u, {
        opacity: 0,
        x: Math.random() * 60 + 30,
        y: 120 + Math.random() * 100,
        scale: .2,
        rotationY: 30,
        rotationX: 230,
        rotationZ: 100,
        rotation: 180,
        ease: c,
        delay: a2 + 0.12,
        onComplete:()=>{
            removeEle("finText");
        }
    });
}

function buttonAnime(){
    let o = 0, u = 1.2,
    c = Power1.easeIn;
    TweenLite.to("#blogBtn", u, {
        opacity:1,
        ease:c,
        delay:o+0.35
    })
    TweenLite.to("#githubBtn", u, {
        opacity:1,
        ease:c,
        delay:o+0.15
    })
    TweenLite.to("#twitterBtn", u, {
        opacity:1,
        ease:c,
        delay:o+0.15
    })
    TweenLite.to("#aboutBtn", u, {
        opacity:1,
        ease:c,
        delay:o+0.35
    })
}

window.addEventListener('load', function (e) {
    preLoad();
});
