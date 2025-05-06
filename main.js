
let iq = 1000;
let started = false;

const subjects = [
  "Капибара", "Батя", "Гигачад", "Шайлушай", "Снюсовый кот", "NPC", "Амогус",
  "Чел с рюкзаком", "Сахарный дед", "Бомж на минималках", "Боб из Бравл Старс",
  "Байден", "Печенька", "НЛО", "Скример", "Гном", "Джанни", "Пельмень",
  "Тапок", "Хрустик", "Малой", "Кот с базукой", "Чебурек", "Пельмень",
  "Сквидвард", "Хомяк", "Гусь", "Вертолёт", "Флексер", "Ждун", "Аниме-девочка"
];

const verbs = [
  "шейкнул", "распылил", "флексил", "заплакал", "лопнул", "ливнул", "отжался",
  "прыгнул", "взорвался", "залагал", "сломался", "отключился", "дропнулся",
  "скримернул", "вылетел", "обновился", "рассыпался", "переобулся", "размазался",
  "закуклился", "вскрылся", "выпал", "улетел", "выключился", "сел на шпагат",
  "улегся", "вселился", "вспотел", "выл", "скипнул"
];

const objects = [
  "в тиктоке", "в танке", "в МФЦ", "на дошике", "в шейк-руме", "под басбустом",
  "на кассе", "в метро", "в сортире", "в подсобке", "на зоне", "в рилсах",
  "в грустной песне", "на фоне слоумо", "в паузе", "на уроке", "на зоне вайба",
  "в муке", "в пробке", "в гугл-доке", "на луне", "в шортсах", "в альфе",
  "в вагоне", "на батле", "в жопе", "в лабе", "в ванне", "в папке temp",
  "в кальянной"
];
const backgrounds = [
  "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
  "https://media.giphy.com/media/3orieZcNkpTkkQ2lR2/giphy.gif",
  "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
  "https://media.giphy.com/media/3ohs7YsN5Z2XE1j3z6/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazE0OGtocmt1bnNrc3Ewd2UxcHczd3JnZGtoZmtqYXRrN2dlZ2RxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1OrIIOIcRTDaNidc5p/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhvZDJkN2dweWtlYjF3MjF2OThucmN1djQ3Z2UzcDNtaWJxNmN4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5704UwWHJ7uRl4xeRh/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhvZDJkN2dweWtlYjF3MjF2OThucmN1djQ3Z2UzcDNtaWJxNmN4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ml1fIFlQgC9gHejiwL/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhvZDJkN2dweWtlYjF3MjF2OThucmN1djQ3Z2UzcDNtaWJxNmN4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AC6oZZbtrLQa4GQkgX/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhvZDJkN2dweWtlYjF3MjF2OThucmN1djQ3Z2UzcDNtaWJxNmN4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5DX0n0MjRdRbvQYhHA/giphy.gif",
  "https://media.giphy.com/media/w3TtX3BXQ0a6d1FPbe/giphy.gif?cid=ecf05e47wowbnz0vf1pppxu5azcy3rgx9a2dzgq8gfh1q5pg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/qCdkOgCl7zRvIdjCqn/giphy.gif?cid=ecf05e47lng1e3if5glflsufd3m6jnfuhermeglge7dnt0ov&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/FXL7cODMAuatWcuw2Q/giphy.gif?cid=ecf05e477pazit5frmne9aa9ia2gdjscbv129oo1kexjgro5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/ikz7ltD7jh7xJ5KffG/giphy.gif?cid=ecf05e47wowbnz0vf1pppxu5azcy3rgx9a2dzgq8gfh1q5pg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/OmS8NFAOvSb9thim0q/giphy.gif?cid=ecf05e47v81mgezgm7enb5o5azkpkclu5nlzl8rx168plta5&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/XsNAXQl1E8ig8MHAhf/giphy.gif?cid=ecf05e47mn6h1cy8yj8vebcmzwscqxvux5fol1gpacf332m0&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/3cTZa9OwKquTi7whcu/giphy.gif?cid=ecf05e47mn6h1cy8yj8vebcmzwscqxvux5fol1gpacf332m0&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/r3wHAiqjHlVpDP0rI2/giphy.gif?cid=ecf05e47nmjnqmklvcntjdq03z7acst0aicuomtqx6f416jo&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/Tm7IZhgnEyfidRIpGD/giphy.gif?cid=ecf05e47nmjnqmklvcntjdq03z7acst0aicuomtqx6f416jo&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/szaTML0LZFAQa3do7Y/giphy.gif?cid=ecf05e47nmjnqmklvcntjdq03z7acst0aicuomtqx6f416jo&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/7BnBCr0xamAhOqtFHZ/giphy.gif?cid=ecf05e47a1d7x4zkvzjhqnf4c5uhr3ean0une4oycrs3l9i8&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDZlaXJmaTAwNzR1bjV2dnF2YjJzOTdkajVpYWpjd3ZlNnk3djRmbiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/l4FGCdurj53YWZYYg/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzU0YjQ1Z3lwNWp6emZ0eWhsOGZsZXhpa2k2b3J5NHpuamg2YzVxYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduQAsYcJKQH2XsI/giphy.gif",
  "https://media.giphy.com/media/122ieBYC3AcECI/giphy.gif?cid=ecf05e4758uo29zkpoipztuyeg4meysus4saq36coxtsewjz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFkZnFqcmR3OXlocWNudnM2dm9ma3lkMTdiYjVnbXI2aXZ6Nzk3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hXafx5jj9HVBe/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTF6NGEzaTd3MjJvYzk4Y2N5eG11OXEydzYzNGVsdGd3eW94dnN6aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hqtlM3Eg0qqRnH4v2m/giphy.gif",
  "https://media.giphy.com/media/P07qz8tX32j72/giphy.gif?cid=ecf05e47p1g9aq34rmff2h4gl5d3p7svaxepv7f4bf2e4iu7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/l1EtaorUrWBf5abeg/giphy.gif?cid=ecf05e47p1g9aq34rmff2h4gl5d3p7svaxepv7f4bf2e4iu7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/t05mKJb8YiLlgckcC3/giphy.gif?cid=ecf05e47p1g9aq34rmff2h4gl5d3p7svaxepv7f4bf2e4iu7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5oOW9kOHFjNDA5YmZwZDhwbnlhMWU2N2lzbXdtNDRwaHVnOXgzbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ofSBoh8hXCs4wIvTi/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjUyNjd2dHEzZGtrNmpiMnFlMGsyYzR0NmNkMjB3dThwazdxaDRpbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/S17ygExE9K4yaAVqry/giphy.gif",

  
];
const sounds = [
  "sounds/dry-fart.mp3",
  "sounds/ekh.mp3",
  "sounds/goofy-ahh-sounds.mp3",
  "sounds/huh_37bAoRo.mp3",
  "sounds/sigma.mp3",
  "sounds/skibidi-toilet.mp3",
  "sounds/vine-boom.mp3",
  "sounds/udar-ot-vzgliada-skaly.mp3",
  "sounds/swoosh-sound-effects.mp3",
  "sounds/rzhd-pribytie-poezda.mp3",
  "sounds/ponos_cld1odf.mp3",
  "sounds/pistol-shot.mp3",
  "sounds/minecraft_click.mp3",
  "sounds/huh-cat.mp3",
  "sounds/brain-fart-slowed.mp3",
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateText() {
  return `${getRandom(subjects)} ${getRandom(verbs)} ${getRandom(objects)}!!1!`;
}

function playRandomSound() {
  const audio = new Audio(getRandom(sounds));
  audio.volume = 0.7;
  audio.play();
}

function updateCard() {
  const card = document.getElementById("card");
  const text = document.getElementById("text");
  const iqDisplay = document.getElementById("iq");

  iq = Math.max(0, iq - 10);
  iqDisplay.innerText = `IQ: ${iq}`;

  card.style.backgroundImage = `url('${getRandom(backgrounds)}')`;
  text.innerText = generateText();
  playRandomSound();
  function applyEffects() {
    const effects = document.getElementById('effects');
    effects.className = 'effects'; // сбрасываем старые
  
    if (iq <= 0) {
      effects.classList.add('effect-error');
      effects.innerText = '💀💀💀💀ERROR: BRAIN NOT FOUND 💀💀💀💀';
      return;
    } else {
      effects.innerText = '';
    }
  
    if (iq <= 100) effects.classList.add('effect-flicker');
    if (iq <= 300) effects.classList.add('effect-noise');
    if (iq <= 500) effects.classList.add('effect-glitch');
  }
  applyEffects();
}

function handleClick() {
  if (!started) {
    started = true;
    document.getElementById("iq").style.display = "block";
    updateCard();
    return;
  }

  updateCard();
}

