'use strict';
console.log('eoliche')

const venti      = ['dia', 'mae', 'chi', 'kos']
const condizioni = ['ser', 'nuv', 'pio', 'tem', 'nev', 'neb']



const paragrafoTot = {
  1 : [12, 20, 32],
  3 : [8,  28, 36],
  5 : [38, 2 , 40],
  10: [31, 11, 42],
  17: [22, 13, 35],
  27: [26, 15, 6, 47],
  30: [],
  33: [7, 37, 44],
  34: [25, 14, 39],
  43: [24, 21, 45],
  46: [23, 18, 41],
  48: [9, 4, 16, 29]
}

const parStaper = [
  ...[31,13,14],
  ...[42,35,39],
]


// condizioni speciali:
// tr: danno
// sce: danno
// scea: {altra condizione: danno}
// ast: asterisco
// reset
// mantieni
// invece, il modo in cui si prendono gli asterischi e il sale, lo hardcodo

const tabellaTot = {
  2: {
    dia: {nuv: +3, neb: +3, ser: +2},
    mae: {nuv: +2, neb: +2},
    chi: {nuv: +2, neb: +2},
    kos: {nuv: +1, neb: +1},
    next: 48
  },
  4: {
    dia: {},
    mae: {pio: +2, tem:+2, nev:+2, ser:+1, nuv:+1, neb: +1},
    chi: {},
    kos: {pio: +2, tem:+2, nev:+2},
    next:10
  },
  6: {
    dia: {neb: +2, scea: {ser: +2}},
    mae: {tem: +1, neb: +2, reset:'reset'},
    chi: {neb: +2, sce:+1},
    kos: {tem: +1},
    next:34
  },
  7: {
    dia: {pio: +2, tem: +2, nev: +2, sce: +1},
    mae: {pio: +2, tem: +2, nev: +2,},
    chi: {pio: +2, tem: +2, nev: +2, sce: +1},
    kos: {tem: +1, neb: +1},
    next:3
  },
  8: {
    dia: {pio: +1, tem: +1, ser: +1, nev: +2},
    mae: {nev: +4, tem: +1, sce: +2},
    chi: {nev: +1, nuv: +2},
    kos: {nev: +4, tem: +1, neb: +3, sce: +2},
    next:46
  },
  9: {
    dia: {nuv: +1, neb: +1, ser: +4, pio:+3, tem: +3, nev: +3},
    mae: {tem: +1},
    chi: {nuv: +1, neb: +1, ser: +4, pio:+2, tem: +2, nev: +2},
    kos: {tem: +2},
    next:10
  },
  11: {
    dia: {ser: +3, tr: +2},
    mae: {},
    chi: {ser: +3, tr: +2},
    kos: {},
    next:33
  },
  12: {
    dia: {ser: +2, nev: -1},
    mae: {pio: +2, tem: +2, nev:+2 },
    chi: {nev: -1 },
    kos: {nev: +1, tem: +1},
    next:17
  },
  13: {
    dia: {},
    mae: {pio: +3, tem: +3, nev: +3, neb: +1},
    chi: {},
    kos: {pio: +3, tem: +3, nev: +3, neb: +2},
    next:27
  },
  14: {
    dia: {},
    mae: {pio: +2, tem: +4, nev: +4},
    chi: {},
    kos: {pio: +2, tem: +4, nev: +4},
    next:43
  },
  15: {
    dia: {ser:+3, sce:+5, nuv:+1},
    mae: {},
    chi: {ser:+3, sce:+2, nuv:+2},
    kos: {},
    next:34
  },
  16: {
    dia: {ser: +2, ast: +3},
    mae: {ast: +3},
    chi: {ast: +3},
    kos: {ast: +4},
    next:10
  },
  18: {
    dia: {ser: +2},
    mae: {pio: +2, tem: +2, nev: +2, neb: +1},
    chi: {tem: +1},
    kos: {pio: +1, tem: +1, nev: +1, neb: +1},
    next:50
  },
  20: {
    dia: {ser: +4, nev:+1, pio:+2, tem: +2},
    mae: {pio:+4, tem:+4, nev: +4, neb: +1},
    chi: {ser: +2, pio: +2, tem: +2},
    kos: {tem: +3, nev: +3, neb: +2},
    next:17
  },
  21: {
    dia: {ser:+2, nev: +1, scea:{tem: +2}, sce: +3},
    mae: {pio: +3, tem: +3, nev: +3, reset: 'reset'},
    chi: {pio: +2, tem: +2, nev: -1, ser:+1, sce: +3},
    kos: {pio: +2, tem: +2, nev: +2},
    next:5
  },
  22: {
    dia: {ser: +3},
    mae: {pio: +1, tem: +1, neb:+1, nev: +1},
    chi: {ser:+2},
    kos: {neb:+2, tem:+2},
    next:27
  },
  23: {
    dia: {},
    mae: {pio: +3, tem: +3, nev: +3, neb: +2},
    chi: {},
    kos: {pio: +3, tem: +3, nev: +3, neb: +3},
    next:50
  },
  24: {
    dia: {ser: +4, tem: +3, nuv: +2, sce: +5},
    mae: {scea:{tem: +2}},
    chi: {ser: +2, tem: +3, nuv: +2, sce: +4},
    kos: {scea:{tem: +2}},
    next:5
  },
  25: {
    dia: {ser: +3, tr:+2},
    mae: {},
    chi: {nev: +3, ser: +3, pio: +4, tem: +4},
    kos: {neb: +2},
    next:43
  },
  26: {
    dia: {tem: +2, sce: +2},
    mae: {tem: +2, reset: 'reset'},
    chi: {sce: +2},
    kos: {tem: +2, sce: +2},
    next:34
  },
  28: {
    dia: {tem: +2, sce: +7, nev: +1},
    mae: {pio: +2, tem: +2, sce: +2},
    chi: {tem: +2, sce: +5},
    kos: {pio: +2, tem: +2, neb: +2, sce: +3},
    next:46
  },
  29: {
    dia: {ser: +2, ast: +1},
    mae: {ast: +1, tr:+1},
    chi: {ser:+1, ast:+1},
    kos: {tem:+4, nev:+2, ast: +1},
    next:10
  },
  31: {
    dia: {},
    mae: {nev: +4, tem: +4, pio:+2},
    chi: {nev: +2},
    kos: {pio: +2, nev: +2, neb: +2, tem: +4},
    next:33
  },
  32: {
    dia: {pio: +1, tem: +1, ser:+3},
    mae: {pio: +6, tem: +6, nev:+6, neb: +1},
    chi: {pio: +1, tem: +1, ser:+1},
    kos: {nev: +4, tem: +4, neb:+2},
    next:17
  },
  35: {
    dia: {ser: +1},
    mae: {pio: +4, tem: +4, nev:+2, neb: +2},
    chi: {ser: +1},
    kos: {pio: +3, nev: +3, neb: +4, tem:+5},
    next:27
  },
  36: {
    dia: {nev: +1, tem: +1, sce: +4},
    mae: {tem: +3, nev: +3, pio: +2},
    chi: {nuv: +1, tem: +1, sce: +3},
    kos: {pio: +2, tem: +2, sce: +3, nev: +4, neb: +4},
    next:46
  },
  37: {
    dia: {mantieni: 'mantieni'},
    mae: {mantieni: 'mantieni'},
    chi: {mantieni: 'mantieni'},
    kos: {mantieni: 'mantieni'},
    next:3
  },
  38: {
    dia: {neb: +2, nuv: +1},
    mae: {neb: +3},
    chi: {neb: +3, nuv: +2},
    kos: {neb: +5},
    next:48
  },
  39: {
    dia: {ser: +2, tr: +1},
    mae: {nev: +4, tem: +4, pio: +2},
    chi: {pio: +2, tem: +2, nev: +1, ser: +1},
    kos: {nev: +4, tem: +4, pio: +2, neb: +2},
    next:43
  },
  40: {
    dia: {neb: +2, nuv: +2, ser:+1},
    mae: {neb: +5, nuv: +2},
    chi: {neb: +2, nuv: +2},
    kos: {neb: +6, nuv: +1},
    next:48
  },
  41: {
    dia: {ser: +1},
    mae: {pio: +5, tem: +5, nev: +5, neb: +3},
    chi: {},
    kos: {pio: +4, tem: +4, nev: +4, neb: +4},
    next:50
  },
  42: {
    dia: {ser:+2, tr:+1},
    mae: {tem:+4, nev:+4, pio: +2},
    chi: {ser:+2, nev:+2, tr:+1},
    kos: {pio:+2, neb:+2, nev: +2, tem: +4},
    next:33
  },
  44: {
    dia: {pio:+1, tem: +1, nev: +1},
    mae: {pio:+2, tem: +2, nev: +2},
    chi: {pio:+1, tem: +1, nev: +1},
    kos: {tem: +1, neb: +1},
    next:3
  },
  45: {
    dia: {ser: +3, scea:{tem: +1}, tem: +1, nuv: +1, sce: +4},
    mae: {scea:{tem: +1}, pio: +3, tem:+3, nuv: +3},
    chi: {ser: +1, pio:+1, nuv: +1, tem: +2, sce: +3},
    kos: {pio: +2, nev: +2, scea:{tem: +2}},
    next:5
  },
  47: {
    dia: {tem: +1, neb:+1, ser:+1, scea:{ser:1}, sce:+3},
    mae: {tem: +1, neb: +1, reset: 'reset'},
    chi: {neb: +1, nuv: +1, ser: +2, sce: +3},
    kos: {tem: +3, sce: +2},
    next:34
  },
}

const paragrafoFinale = 50
const results = {}

// Crea lo stampo per i risultati
venti.forEach( vento => {
  const res = {}
  condizioni.forEach( c => res[c] = [])
  results[vento] = res
})


const deepCopy = obj => JSON.parse(JSON.stringify(obj))

function vaiAlParagrafo(status, par){
  const {vento, condizione, paragrafi, tabelle} = status
  paragrafi.push(par)

  if(par == paragrafoFinale){
    results[vento][condizione].push({danno: status.danno, tabelle})
    return
  }

  if(status.staper){
    status.staper = false
    status.scendi = true
  }

  const paragrafo = paragrafoTot[par]
  paragrafo.forEach( tab => {
    const st = deepCopy(status)
    if(parStaper.includes(tab)) st.staper = true
    vaiAllaTabella(st, tab)
  })

}

function vaiAllaTabella(status, tab){
  const {vento, condizione, paragrafi, tabelle} = status
  const oldDanno = status.danno
  tabelle.push(tab)
  const tabella = tabellaTot[tab][vento]

  // Se c'è il reset e sta scendendo, non applicare niente
  if(status.scendi && 'reset' in tabella){
    status.scendi = false
    vaiAlParagrafo(deepCopy(status), tabellaTot[tab].next)
    return
  }

  /* Inizia ad applicare malus e bonus */
  // Aggiunge l'asterisco
  if(tab == 2 && (condizione == 'nuv' || condizione == 'neb')) status.ast = true



  //Condizione atmosferica
  if(condizione in tabella) status.danno += tabella[condizione]

  // Asterisco
  if(status.ast && 'ast' in tabella) status.danno += tabella['ast']

  // Scendi
  if(status.scendi){
    if('sce' in tabella) status.danno += tabella['sce']
    if('scea' in tabella){
      if(condizione in tabella.scea) status.danno += tabella.scea[condizione]
    }
  }

  //Tutto il resto
  if(oldDanno == status.danno && 'tr' in tabella) status.danno += tabella['tr']

  // Resetta lo scendi
  if(!('mantieni' in tabella)) status.scendi = false

  // Prosegui
  vaiAlParagrafo(deepCopy(status), tabellaTot[tab].next)
}


function log(obj){
  console.log(obj)
  const p = document.getElementById("output");
  p.appendChild(document.createTextNode(
    JSON.stringify(obj, null, 2)
  ))
  p.innerHTML += '<br><br>'
}


const buoni   = (a,b) => a.danno - b.danno
const cattivi = (a,b) => b.danno - a.danno

document.getElementById("start").onclick = () =>{
  const cVento = document.getElementById('venti').value
  const cCondi = document.getElementById('meteo').value

  const filter = document.getElementById("buoni").checked
          ? buoni : cattivi

  log(`Inizio simulazione per '${cVento}' in condizioni '${cCondi}' con venti ${
    document.getElementById("buoni").checked ? "'buoni'" : "'cattivi'"
  }...`)

  vaiAlParagrafo({
    vento: cVento,
    condizione: cCondi,
    danno: 0,
    paragrafi: [],
    tabelle: [],
  }, 1)


  results[cVento][cCondi].sort(filter).filter( (a,i) => i < 5).forEach( v => log(v))


  log('finito!')


}


//console.log(JSON.stringify(results.dia.ser, null, 2))
