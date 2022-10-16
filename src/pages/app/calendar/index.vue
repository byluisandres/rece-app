<template lang="">
  <div class="page-calendar">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";

export default {
  name: "calendar",
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        locale: esLocale,
        headerToolbar: {
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "prev,next",
        },
        initialView: "timeGridWeek",
      },
    };
  },
};
</script>
<style lang="css">
.page-calendar{
  height: 100vh;
}
</style>
