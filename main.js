//javascript for the activties part
var currMiddleImage = 1; //important, do not fucking change this

var firstIcon = document.getElementById("svg-1");
firstIcon.addEventListener("click", () => {
    if (currMiddleImage == 1) {
        return    
    } else {
        imageToOldPosition()
        currMiddleImage = 1;
    }
})

var secondIcon = document.getElementById("svg-2");
secondIcon.addEventListener("click", () => {
    if (currMiddleImage == 2) {
        return
    } else {
        imageToOldPosition()
        document.getElementById("image-2").src = "jackbox.png";
        document.getElementById("image-1").src = "buffet.png";
        currMiddleImage = 2;
    }
})

var thirdIcon = document.getElementById("svg-3");
thirdIcon.addEventListener("click", () => {
    if (currMiddleImage == 3) {
        return
    } else {
        imageToOldPosition()
        document.getElementById("image-3").src = "jackbox.png";
        document.getElementById("image-1").src = "showing.png";
        currMiddleImage = 3;
    }
})

function imageToOldPosition() {
    let firstImage = document.getElementById("image-1");
    let secondImage = document.getElementById("image-2");
    let thirdImage = document.getElementById("image-3");
    firstImage.src = "jackbox.png";
    secondImage.src = "buffet.png";
    thirdImage.src = "showing.png";
}   


//jaavscript for the leadership part
const DOM = {
    timeline: "timeline",
    timelineStepper: "timeline__stepper",
    timelineStep: "timeline__step",
    timelineStepTitle: "timeline__step-title",
    timelineStepActive: "is-active",
    timelineStepActiveMarker: "timeline__step-active-marker",
    timelineSlide: "timeline__slide",
    timelineSlideActive: "is-active"
}
  
const STEP_ACTIVE_MARKEP_CUSTOM_PROPS = {
    width: "--slide-width",
    posX: "--slide-pos-x",
    posY: "--slide-pos-y"
}
  
const timeline = document.querySelector(`.${DOM.timeline}`)
const timelineStepper = timeline?.querySelector(`.${DOM.timelineStepper}`)
const timelineStepTitle = timeline?.querySelector(`.${DOM.timelineStepTitle}`)
const timelineSlides = timeline && Array.from(timeline.querySelectorAll(`.${DOM.timelineSlide}`))
  
window.addEventListener("load", () => {
    createStepActiveMarker()
    activateCurrentSlide()
})
  
window.addEventListener("resize", () => {
    recalcStepActiveMarkerProps()
})
  
timeline?.addEventListener("click", event => {
    const { target } = event
  
    if (
        !target ||
        !(target instanceof Element) ||
        !target.closest(`.${DOM.timelineStep}`)
    ) {
        return
    }
  
    const currentStep = target.closest(`.${DOM.timelineStep}`)
  
    if (!currentStep) {
        return
    }
  
    deactivateSteps()
    activateCurrentStep(currentStep)
  
    recalcStepActiveMarkerProps()
  
    deactivateSlides()
    activateCurrentSlide()
})
  
function deactivateSteps() {
    const steps = document.querySelectorAll(`.${DOM.timelineStep}`)
    steps?.forEach(elem => elem.classList.remove(`${DOM.timelineStepActive}`))
}
  
function activateCurrentStep(currentStep) {
    currentStep?.classList.add(`${DOM.timelineStepActive}`)
}
  
function deactivateSlides() {
    timelineSlides?.forEach(elem =>
      elem.classList.remove(`${DOM.timelineSlideActive}`)
    )
}
  
function activateCurrentSlide() {
    const currentSlide = getCurrentSlide()
    currentSlide?.classList.add(`${DOM.timelineSlideActive}`)
}
  
function createStepActiveMarker() {
    const stepActiveMarker = document.createElement("div")
    stepActiveMarker.classList.add(`${DOM.timelineStepActiveMarker}`)
    timelineStepper?.appendChild(stepActiveMarker)
  
    const positionProps = getStepActiveMarkerProps()
  
    if (!positionProps) {
        return
    }
  
    setStepActiveMarkerProps({
        stepActiveMarker,
        ...positionProps
    })
}
  
  function recalcStepActiveMarkerProps() {
    const stepActiveMarker = timeline?.querySelector(
        `.${DOM.timelineStepActiveMarker}`
    )
  
    const stepActiveMarkerProps = getStepActiveMarkerProps()
    if (!stepActiveMarkerProps) {
        return
    }
  
    setStepActiveMarkerProps({ stepActiveMarker, ...stepActiveMarkerProps })
}
  
function setStepActiveMarkerProps({ stepActiveMarker, posX, posY, width }) {
    stepActiveMarker.style.setProperty(
        `${STEP_ACTIVE_MARKEP_CUSTOM_PROPS.width}`,
        `${width}px`
    )
  
    stepActiveMarker.style.setProperty(
        `${STEP_ACTIVE_MARKEP_CUSTOM_PROPS.posX}`,
        `${posX}px`
    )
  
    if (typeof posY === "number") {
        stepActiveMarker.style.setProperty(
            `${STEP_ACTIVE_MARKEP_CUSTOM_PROPS.posY}`,
            `${posY}px`
        )
    }
}
  
function getStepActiveMarkerProps() {
    const { currentStep } = getCurrentStep()
  
    if (!currentStep) {
        return null
    }
  
    const width = getElementWidth(currentStep)
    const posX = getStepActiveMarkerPosX(currentStep)
    const posY = getStepActiveMarkerPosY()
  
    if (typeof posX !== "number" || typeof posY !== "number") {
        return null
    }
  
    return { posX, posY, width }
}
  
function getCurrentStep() {
    const timelineSteps = Array.from(
        document.querySelectorAll(`.${DOM.timelineStep}`)
    )
  
    const currentStep = timelineSteps.find(element =>
        element.classList.contains(`${DOM.timelineStepActive}`)
    )
  
    const currentStepIndex =
    currentStep && timelineSteps.findIndex(element =>
        element.classList.contains(`${DOM.timelineStepActive}`)
    )
  
    return { currentStep, currentStepIndex }
}
  
function getCurrentSlide() {
    const { currentStepIndex } = getCurrentStep()
  
    if (typeof currentStepIndex !== "number" || !timelineSlides) {
      return null
    }
  
    return timelineSlides[currentStepIndex]
}
  
function getStepActiveMarkerPosY() {
    const timelineTitlePosY = timelineStepTitle?.getBoundingClientRect().top
    const timelineStepperPosY = timelineStepper?.getBoundingClientRect().top
  
    if (!timelineTitlePosY || !timelineStepperPosY) {
      return null
    }
  
    return timelineTitlePosY - timelineStepperPosY
}
  
function getStepActiveMarkerPosX(currentStep) {
    const timelineStepperPosX = timelineStepper?.getBoundingClientRect().left
    const currentStepPosX = currentStep.getBoundingClientRect().left
  
    if (!timelineStepperPosX) {
      return null
    }
  
    return currentStepPosX - timelineStepperPosX
}
  
function getElementWidth(elem) {
    return elem.clientWidth
}