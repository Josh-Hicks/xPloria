"use strict";$(function(){var e,a,t,n,l,o,d;$("audio")[0].currentTime=10,$("audio")[0].play();var c=function(){function i(){e={},e.name=null,e.health=100,e.money=100,e.weapon=null,e.potions=0}function l(){a=new Date,t=a.getHours(),n=12>t?"morning":t>12&&17>t?"noon":t>17&&20>t?"evening":"night",console.log(n),i()}return{init:l}}(),r=function(){l=[{item:"Paladin Sword",damage:10,price:40},{item:"Battle Axe",damage:20,price:60},{item:"War Club",damage:30,price:80}],d=[{item:"Leather Cap",defense:10,price:10},{item:"Battle Armor",defense:40,price:40},{item:"Sheild",defense:30,price:30}],o=[{item:"Healing Potion",health:10,price:20},{item:"Healing Potion",health:10,price:20},{item:"Healing Potion",health:10,price:20},{item:"Healing Potion",health:10,price:20}]}();setTimeout(function(){$("#start-screen").fadeIn(2e3),$("#start-screen p").fadeIn(3e3),$("#start-screen button").delay(3e3).fadeIn(5e3),$("#start-screen .glow-ball").fadeIn(),$("#start-screen #mountain-king").delay(4e3).fadeIn(5e3)},500),$("#start-btn").on("click",function(){c.init(),$("audio")[1].volume=1,$("audio")[1].play(),$(".active").removeClass("active").fadeOut(500),$("body").addClass(n),$("#village").addClass("active").delay(500).fadeIn(2e3),$("#village .one").fadeIn(4e3).delay(7e3).fadeOut(1e3).next().delay(12e3).fadeIn(1e3).next().delay(12e3).fadeIn(1e3),setTimeout(function(){$("audio")[2].volume=.25,$("audio")[2].play()},9e3)}),$("#village .first-next-btn").on("click",function(){var a=$("#name").val();""!==a?e.name=a:e.name="Ragnar",$("#village p").fadeOut(1e3),$("#village .four").delay(1500).fadeIn(2e3),$("audio")[3].volume=.75,$("audio")[3].play()}),$("#village .next-btn-two").on("click",function(){$("#village .four").fadeOut(1e3),$("#village .theName").text(e.name),$("#village .five").delay(1500).fadeIn(2e3).next().delay(3e3).fadeIn(2e3),$("audio")[4].volume=.75,$("audio")[4].play()}),$("#village .third-next-btn").on("click",function(){$("#village .five").fadeOut(1e3),$("#village .six").fadeOut(1e3).next().delay(2e3).fadeIn(1e3)}),$("#village .fourth-next-btn").on("click",function(){$("audio")[1].volume=1,$("audio")[1].play(),$("#village").removeClass("active").fadeOut(1e3).next().delay(2e3).fadeIn(2e3)}),$("#market .one").delay(2e3).fadeIn(1e3),$("#market .first-next-btn").on("click",function(){$("#market .one").fadeOut(1e3),$("#market .two-a").delay(3e3).fadeIn(1e3)}),$("#market #blacksmith").on("click",function(){$("#market").fadeOut(1e3),$("#blacksmith-store").delay(2e3).fadeIn(1e3)}),$("#market #apothecary").on("click",function(){for($("#market").fadeOut(1e3),item="",i=0;i<r.potions.length;i++)item+='<li class="item"> Item: '+r[i].item+"<br> Health: &plus;"+r[i].health+"<br> Price: &#x20B9;"+r[i].price+"</li>",$("#potions-list ul").append(item);$("#apothecary-store").delay(2e3).fadeIn(0)}),$("#done-shopping").on("click",function(){$("audio")[1].play(),$(this).closest("section").fadeOut(1e3),$("#market ").delay(2e3).fadeIn(1e3),$("#market .two-a").hide(),$("#market .two-b").delay(2e3).fadeIn(1e3),null!==e.weapon&&e.potions>0&&$("#to-plains").fadeIn(1e3)}),$("#to-plains").on("click",function(){$(this).closest("section").fadeOut(1e3),$("#plains").delay(2e3).fadeIn(1e3)})}());