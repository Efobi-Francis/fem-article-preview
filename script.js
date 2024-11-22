const btn = document.getElementById('btnBg')
const btnIcon = document.getElementById('btnIcon')
// const btnBg = document.getElementById('btnBg')

const shareDisplayMobile = document.getElementById('shareShowMobile')
const shareDisplayDesktop = document.getElementById('shareShowDesktop')

function toggleShareMobile() {
    btn.addEventListener('click', ()=>{
        if(shareDisplayMobile.classList.contains('hide-mobile')) {
            shareDisplayMobile.classList.remove('hide-mobile')
            btn.classList.add('share-bg-mobile')
            btnIcon.classList.add('share-icon')
            
        }else {
            shareDisplayMobile.classList.add('hide-mobile')
            btn.classList.remove('share-bg-mobile')
            btnIcon.classList.remove('share-icon')
            
        }
    })
}

function toggleShareDesktop() {
    btn.addEventListener('click', ()=>{

        if(shareDisplayDesktop.classList.contains('hide-desktop')) {
            shareDisplayDesktop.classList.remove('hide-desktop')
            btn.classList.add('share-bg-desktop')
            btnIcon.classList.add('share-icon')
        }else {
            shareDisplayDesktop.classList.add('hide-desktop')
            btn.classList.remove('share-bg-desktop')
            btnIcon.classList.remove('share-icon')
        }
    })
}

toggleShareMobile()
toggleShareDesktop()