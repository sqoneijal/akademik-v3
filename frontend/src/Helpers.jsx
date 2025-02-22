export const parse = (key, content = {}, type = "text") => {
   if (typeof content[key] === "undefined") {
      return "";
   }
   let text = content[key];
   if (text == null || text == "") {
      return "";
   }
   text = text.toString();
   if (type === "rupiah") {
      return toInt(text) > 0 ? wNumb({ thousand: ".", prefix: "Rp " }).to(toInt(text)) : "Rp 0";
   }
   if (type === "date" && valid_date(text)) {
      moment.locale("id");
      if (text !== "-") return moment(text).format("DD MMMM YYYY");
   }
   if (type === "jam") {
      return moment(text, "HH:mm").format("hh:mm A");
   }
   if (text.slice(0, 1) == "0") {
      return text.replace(/^(?:\s+|\s+)$/gm, "");
   }
   if (text.replace(/\d/gm, "").length > 0) {
      return text;
   }
   return toInt(text) > 0 ? toInt(text) : text.replace(/^(?:\s+|\s+)$/gm, "");
};

export const arrLength = (content = []) => {
   return content.length > 0;
};
