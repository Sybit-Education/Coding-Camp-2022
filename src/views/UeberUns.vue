<template>
 <back-btn-vue/>
<h1> ÜBER UNS </h1>
   <h2>Sybit Coding-Camp</h2>
   Das Sybit Coding-Camp findet jährlich statt und bietet Jugendlichen die Chance, einen Einblick in den Beruf von Softwareentwicklerinnen und Softwareentwicklern, sowie die Ausbildung als Fachinformatiker:in (Anwendungsentwicklung) zu erhalten. Die Auszubildenden des Unternehmens bereiten hierfür im Vorfeld ein Projekt vor und coachen die Jugendlichen während des Coding-Camps.
   <h2>Was haben wir denn während des Coding-Camps gemacht?</h2>
   Während des Coding-Camps haben wir eine Web-App für das Radolfzeller Ferienprogramm gecodet. Wir sind insgesamt zehn Schüler und sechs Auszubildende gewesen. Die Auszubildenden haben uns vieles über das Programmieren mit Vue, JavaScript, HTML und CSS beigebracht. Wir haben uns in fünf Gruppen aufgeteilt und an den zuvor besprochenen Aufgaben gearbeitet. Uns wurde erklärt, wie eine Firma wie Sybit arbeitet. Danach haben uns das Sybit-Team die Personas erklärt und vorgestellt. Gegen Ende unserer Vorbereitung haben wir vier Personas erstellt und jeweils User Storys für diese erstellt.
 <p></p>
 <a href="https://coding-camp.sybit.de/" target="_blank">Hier</a> gehts zur Website vom Sybit Coding-Camp.
 <p></p>
 <p></p>
 <div class="gruppenbild">
    <img src="../../public/img/pictures/group.png" class="gruppenbild"/>
</div>
<div id="bildunterschrift">
   Text unterm Bild (Platzhalter)
</div>
</template>

<script>
import BackBtnVue from '@/components/event/details/BackBtn.vue'

export default {
  components: { BackBtnVue }
}
</script>

<style>
.gruppenbild{
    text-align: center;
    width: 90%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}
#bildunterschrift{
   text-align: center;
   font-size: 75%;
}
h1{
   text-align: center;
   color: grey  ;
   }

</style>
