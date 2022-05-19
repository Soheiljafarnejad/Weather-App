import day113 from "../assets/light/113.png";
import day116 from "../assets/light/116.png";
import day119 from "../assets/light/119.png";
import day176 from "../assets/light/176.png";
import day179 from "../assets/light/179.png";
import day200 from "../assets/light/200.png";
import day263 from "../assets/light/263.png";
import day314 from "../assets/light/314.png";
import day365 from "../assets/light/365.png";
import day386 from "../assets/light/386.png";
import day389 from "../assets/light/389.png";
import day395 from "../assets/light/395.png";
// night
import night113 from "../assets/dark/113.png";
import night116 from "../assets/dark/116.png";
import night122 from "../assets/dark/122.png";
import night176 from "../assets/dark/176.png";
import night185 from "../assets/dark/185.png";
import night248 from "../assets/dark/248.png";
import night365 from "../assets/dark/365.png";
import night388 from "../assets/dark/388.png";
import night389 from "../assets/dark/389.png";
import night392 from "../assets/dark/392.png";

const iconOptions = [
  { title: "day113", url: day113 },
  { title: "day116", url: day116 },
  { title: "day119", url: day119 },
  { title: "day122", url: day119 },
  { title: "day143", url: day119 },
  { title: "day248", url: day119 },
  { title: "day176", url: day176 },
  { title: "day182", url: day176 },
  { title: "day293", url: day176 },
  { title: "day299", url: day176 },
  { title: "day305", url: day176 },
  { title: "day353", url: day176 },
  { title: "day356", url: day176 },
  { title: "day359", url: day176 },
  { title: "day179", url: day179 },
  { title: "day200", url: day200 },
  { title: "day263", url: day263 },
  { title: "day266", url: day263 },
  { title: "day296", url: day263 },
  { title: "day302", url: day263 },
  { title: "day308", url: day263 },
  { title: "day314", url: day314 },
  { title: "day311", url: day314 },
  { title: "day284", url: day314 },
  { title: "day281", url: day314 },
  { title: "day260", url: day314 },
  { title: "day326", url: day314 },
  { title: "day230", url: day314 },
  { title: "day277", url: day314 },
  { title: "day185", url: day314 },
  { title: "day365", url: day365 },
  { title: "day362", url: day365 },
  { title: "day317", url: day365 },
  { title: "day320", url: day365 },
  { title: "day386", url: day386 },
  { title: "day389", url: day389 },
  { title: "day395", url: day395 },
  { title: "day392", url: day395 },
  { title: "day329", url: day395 },
  { title: "day302", url: day395 },
  { title: "day355", url: day395 },
  { title: "day338", url: day395 },
  { title: "day350", url: day395 },
  { title: "day368", url: day395 },
  { title: "day371", url: day395 },
  { title: "day374", url: day395 },
  { title: "day377", url: day395 },
  { title: "day323", url: day395 },
  // night
  { title: "night395", url: day395 },
  { title: "night392", url: day395 },
  { title: "night113", url: night113 },
  { title: "night116", url: night116 },
  { title: "night119", url: night116 },
  { title: "night122", url: night122 },
  { title: "night143", url: night122 },
  { title: "night176", url: night176 },
  { title: "night299", url: night176 },
  { title: "night305", url: night176 },
  { title: "night293", url: night176 },
  { title: "night395", url: night176 },
  { title: "night356", url: night176 },
  { title: "night353", url: night176 },
  { title: "night308", url: night176 },
  { title: "night263", url: night176 },
  { title: "night266", url: night176 },
  { title: "night296", url: night176 },
  { title: "night302", url: night176 },
  { title: "night185", url: night185 },
  { title: "night281", url: night185 },
  { title: "night284", url: night185 },
  { title: "night311", url: night185 },
  { title: "night314", url: night185 },
  { title: "night248", url: night248 },
  { title: "night260", url: night248 },
  { title: "night365", url: night365 },
  { title: "night362", url: night365 },
  { title: "night320", url: night365 },
  { title: "night182", url: night365 },
  { title: "night317", url: night365 },
  { title: "night388", url: night388 },
  { title: "night350", url: night388 },
  { title: "night368", url: night388 },
  { title: "night371", url: night388 },
  { title: "night374", url: night388 },
  { title: "night377", url: night388 },
  { title: "night227", url: night388 },
  { title: "night335", url: night388 },
  { title: "night335", url: night388 },
  { title: "night329", url: night388 },
  { title: "night326", url: night388 },
  { title: "night323", url: night388 },
  { title: "night230", url: night388 },
  { title: "night179", url: night388 },
  { title: "night389", url: night389 },
  { title: "night386", url: night389 },
  { title: "night200", url: night389 },
  { title: "night392", url: night392 },
];

const icons = (imgUrl) => {
  const value = imgUrl.split("/").splice(5, 6).join("").split(".")[0];
  const findIcon = iconOptions.find((item) => item.title === value);
  if (findIcon) return findIcon.url;
  else {
    if (value.includes("night")) return night113;
    else return day113;
  }
};

export default icons;
