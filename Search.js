function search(){
    var input = document.getElementById("searchbar").value;
    document.write('<body background="https://spaceplace.nasa.gov/resources/index/space_background.png"><h1 style="color: white;">Search Result of "<span id="input" style="color: red;">'+input+'</span>"</h1><h2>');
    input = input.toUpperCase();
    var result = "not_found";
    const cond = [
        "SOLARSYSTEM", "EARTH", "SUN", "MOON", "PLANETS", "DWARFPLANETS", 
        "MERCURY", "VENUS", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE",
        "PHASESOFTHEMOON", "ECLIPSE", "SOLARECLIPSE", "LUNARECLIPSE",
        "SATELLITE", "STARS", "CONSTELLATIONS", "BLACKHOLE", "GALAXY"
    ];
    const link = [
        "Solar_System", "Earth", "Sun", "Moon", "Planets", "Planets", 
        "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune",
        "Phases_Moon", "Eclipse", "Solar_Eclipse", "Lunar_Eclipse",
        "Satellite", "Stars", "Constellation", "Black_Hole", "Galaxy"
    ];
    const names = [
        "Solar System", "Earth", "Sun", "Moon", "Planets", "Dwarf Planets", 
        "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune",
        "Phases of the Moon", "Eclipse", "Solar Eclipse", "Lunar Eclipse",
        "Satellite", "Stars", "Constellations", "Black Hole", "Galaxy"
    ];
    
    var Cond, Link, Name;
    for(i=0; i<=cond.length-1; i++){
        Cond = cond[i];
        Link = link[i]+".html";
        Name = names[i];
        if(Cond.includes(input)){
          document.write(window.href="<a href=About_Space/"+Link+">"+Name+"</a><br>");
          result = "found";
        }
    }
    back();
    if(result == "not_found"){
        not_found();
    }
}

function search2(){
    var input = document.getElementById("searchbar").value;
    document.write('<body background="https://spaceplace.nasa.gov/resources/index/space_background.png"><h1 style="color: white;">Search Result of "<span id="input" style="color: red;">'+input+'</span>"</h1><h2>');
    input = input.toUpperCase();
    var result = "not_found";
    const cond = [
        "SOLARSYSTEM", "EARTH", "SUN", "MOON", "PLANETS", "DWARFPLANETS", 
        "MERCURY", "VENUS", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE",
        "PHASESOFTHEMOON", "ECLIPSE", "SOLARECLIPSE", "LUNARECLIPSE",
        "SATELLITE", "STARS", "CONSTELLATIONS", "BLACKHOLE", "GALAXY"
    ];
    const link = [
        "Solar_System", "Earth", "Sun", "Moon", "Planets", "Planets", 
        "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune",
        "Phases_Moon", "Eclipse", "Solar_Eclipse", "Lunar_Eclipse",
        "Satellite", "Stars", "Constellation", "Black_Hole", "Galaxy"
    ];
    const names = [
        "Solar System", "Earth", "Sun", "Moon", "Planets", "Dwarf Planets", 
        "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune",
        "Phases of the Moon", "Eclipse", "Solar Eclipse", "Lunar Eclipse",
        "Satellite", "Stars", "Constellations", "Black Hole", "Galaxy"
    ];
    
    var Cond, Link, Name;
    for(i=0; i<=cond.length-1; i++){
        Cond = cond[i];
        Link = link[i]+".html";
        Name = names[i];
        if(Cond.includes(input)){
          document.write(window.href="<a href="+Link+">"+Name+"</a><br>");
          result = "found";
        }
    }
    back();
    if(result == "not_found"){
        not_found();
    }
}

function not_found(){
    alert("No Result Found");
    location.reload();
}

function back(){
    document.write('<div style="position: absolute; bottom: 8px; right: 16px; font-size: 18px;">');
    document.write('<button id="button" onclick="location.reload();" style="background-color: skyblue; font-weight: bold;">Go Back');
    document.write("</button></div></h2></body>");
}