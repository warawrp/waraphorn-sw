<script >
import Header from '../components/Header.vue';
import ContactList from '../components/ContactList.vue';
import HeaderContent from '../components/HeaderContent.vue';
import CardContent from '../components/card/CardResume.vue';
import btnwarning from '../components/button/BtnWarning.vue';
import btnDanger from '../components/button/BtnDangerCustom.vue';


export default {
  data(){
    return{
      skills:[
        "HTML 5","CSS","JavaScript","JavaScript ES6","Bootstrap 4","Bootstrap 5","Tailwind CSS",
        "Vue.js","Nuxt.js","Next.js","Figma","Adobe XD","Adobe Photoshop","Adobe illustator","GitHab / Gitlab"
    ]
    }
  },
  components:{
    Header,
    btnDanger,
    ContactList,
    HeaderContent,
    CardContent,
    btnwarning
  },
}
</script>

<template>
      <Header title="Resume">
        <template  v-slot:sub-title >
          <div class="d-flex gap-2 flex-column flex-sm-row" >
            <a href="/waraphornSw-resume2023.pdf" download>
              <btnDanger  text="Download Resume PDF Version" icon="pdf.svg"/>
            </a>
            <a href="/waraphornSw-other-documents.pdf" download>
              <btnwarning  text="Download Other Documents" icon="pdf.svg"/>
            </a>
          </div>
        </template>
      </Header>
      
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-12 col-xl-9 d-flex align-items-center justify-content-start justify-content-md-center justify-content-xl-start ">
            <div>
              <h2 class="text-start text-md-center text-xl-start" >Waraphorn Srijiw</h2>
              <h6>Front-End Developer and UX/UI Designer</h6>
            </div>
          </div>
          <div class="col-12 col-xl-3 py-2 mb-3 d-grid justify-content-start gap-1 d-md-flex justify-content-md-center gap-md-3 d-xl-grid justify-content-xl-start gap-xl-1 flex-wrap header-line ">
            <ContactList text="094-940-7370" icon="phone.svg" />
            <ContactList text="waraphorn.sw&#64;gmail.com" icon="mail.svg" />
            <ContactList text="warawrp26" icon="line.svg" />
            <ContactList text="waraphorn-sw.web.app" icon="web.svg" />
          </div>
          <hr>
        </div>
        <div class="row">
          <div class="col-12 col-xl-9 order-xl-1 ">
            <div>
              <HeaderContent title="Work Experienes" />
              <div class="d-grid gap-4" >
                <CardContent title="Multiverse Expert" subtitle="MI Group | 2565 - 05.65">
                  <div class="d-flex flex-wrap">
                    <p class="me-2">Front-End Development</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill html" >HTML 5</span>
                      <span class="pill css" >CSS</span>
                      <span class="pill js" >JavaScript</span>
                      <span class="pill bootstrap" >Bootstrap 5</span>
                      <span class="pill nuxt" >Nuxt.js</span>
                      <span class="pill next" >Next.js</span>
                      <span class="pill tailwind" >Tailwindcss</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap ">
                    <p class="mb-0 me-2">UX/UI Design</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill figma" >Figma</span>
                      <span class="pill ai" >illustator</span>
                      <span class="pill psd" >Photoshop</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent title="Multi Infinity Plus" subtitle="MI Group | 2564">
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">Front-End Development</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill html" >HTML 5</span>
                      <span class="pill css" >CSS</span>
                      <span class="pill js" >JavaScript</span>
                      <span class="pill bootstrap" >Bootstrap 4</span>
                      <span class="pill vue" >vue.js</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">UX/UI Design</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill figma" >Figma</span>
                      <span class="pill ai" >illustator</span>
                      <span class="pill psd" >Photoshop</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">Prototype Design</p>
                    <div class="d-flex align-items-center gap-1">
                      <span class="pill figma" >Figma</span>
                    </div>
                  </div>
                  <p>วิเคราะห์ความต้องการ</p>
                </CardContent>

                <CardContent title="Multi Infinity Plus" subtitle="MI Group | 2563">
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">Front-End Development</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill html" >HTML 5</span>
                      <span class="pill css" >CSS</span>
                      <span class="pill js" >JavaScript</span>
                      <span class="pill bootstrap" >Bootstrap 4</span>
                      <span class="pill laravel" >Laravel 7</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">UX/UI Design</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill xd" >XD</span>
                      <span class="pill psd" >Photoshop </span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="me-2">Prototype Design</p>
                    <div class="d-flex align-items-center gap-1">
                      <span class="pill xd" >XD</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">UML Diagram Design</p>
                    <div class="d-flex align-items-center gap-1">
                      <span class="pill draw" >Draw.io</span>
                    </div>
                  </div>
                  <p>วิเคราะห์ความต้องการ</p>
                </CardContent>

                <CardContent title="Multi Inovation Engineering" subtitle="MI Group | 06.63 - 2563">
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">UX/UI Design</p>
                    <div class="d-flex flex-wrap align-items-center gap-1">
                      <span class="pill xd" >XD</span>
                      <span class="pill psd" >Photoshop </span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="me-2">Prototype Design</p>
                    <div class="d-flex align-items-center gap-1">
                      <span class="pill xd" >XD</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap">
                    <p class="mb-0 me-2">UML Diagram Design</p>
                    <div class="d-flex align-items-center gap-1">
                      <span class="pill draw" >Draw.io</span>
                    </div>
                  </div>
                  <p>วิเคราะห์ความต้องการ</p>
                </CardContent>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 header-line order-xl-2">
              <div>
                <HeaderContent title="Skills" />
                <CardContent title="Technical">
                  <p v-for="(item,index) in skills" :key="index">{{ item }}</p>
                </CardContent>
              </div>
          </div>

          <div class="col-12 col-lg-3 header-line order-xl-4">
            <div class="mt-5" >
              <HeaderContent title="Profile" />
              <CardContent>
                <p>ชื่อ : วราพร ศรีจิ๋ว</p>
                <p>อายุ : 28 ปี</p>
                <p>ที่อยู่ : นครปฐม, ประเทศไทย</p>
              </CardContent>
            </div>
          </div>
          <div class="col-12 col-xl-9 order-xl-3" >
            <div class="mt-5" >
              <HeaderContent title="Education" />
                <div class="d-grid gap-4" >
                  <CardContent title="ปริญญาวิทยาศาสตรบัณฑิต" subtitle="มหาวิทยาลัยนอร์ทกรุงเทพ | 2556 - 2560">
                    <p>สาขาวิชาวิศวกรรมซอฟต์แวร์ คณะเทคโนโลยีสารสนเทศ </p>
                  </CardContent>
                  <CardContent title="มัธยมศึกษาตอนปลาย" subtitle="โรงเรียนไทรน้อย | 2553 - 2555">
                    <p>สายวิทย์-คณิต</p>
                  </CardContent>
                </div>
            </div>
          </div>
          
        </div> 
      </div>
</template>

<style scoped>
.container-fluid{
  width:calc(100% - 20px);
  margin: 10px;
  background-color: var(--primary);
  padding: 20px;
  border-radius: 10px;
}

h2{
  color: var(--white);
  margin-bottom: 0;
  font-weight: bolder;
  font-size: 20px;
}

h6{
  font-weight: lighter;
  font-size: 14px;
  color: var(--grey);
}

p{
  margin-bottom: 0;
  color: var(--grey);
}


@media screen and (min-width: 1200px) {
  .header-line{
    border-left: 1px solid #92929260 ;
  }

  h2{
    font-size: 26px;
    letter-spacing: 2px;
  }

  h6{
    font-size: 18px;
  }

  .container-fluid{
    width:calc(100% - 100px);
    margin: 50px;
    padding: 30px;
  }

  p{
    white-space: nowrap;
    
  }

}
</style>
