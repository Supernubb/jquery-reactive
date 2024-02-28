"use strict";

$(function () {
  $("#app")
    .vm({ name: "tom", age: 10 })
    .fn("grow", (state) => state.age++)
    .mount();
});
