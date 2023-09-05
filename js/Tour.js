AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Spider Man",
        url: "./assets/thumbnails/spider_man.png",
      },
      {
        id: "budapest",
        title: "Superman",
        url: "./assets/thumbnails/superman.png",
      },

      {
        id: "eiffel-tower",
        title: "Batman",
        url: "./assets/thumbnails/batman.png",
      },
      {
        id: "new-york-city",
        title: "Iron Man",
        url: "./assets/thumbnails/iron_man.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const BorderEl = this.createBorder(position, item.id);
      
      // Thumbnail Element
      const Thumbnail = this.createThumbnail(item);
      BorderEl.appendChild(Thumbnail);
     
      // Title Text Element
      const TitleEl = this.createTitleEl(position, item);
      BorderEl.appendChild(TitleEl);
      
      this.placesContainer.appendChild(BorderEl);
    }
  },
  createBorder: function(position, id) {
    const EntityEl = document.createElement("a-entity");

    EntityEl.setAttribute("id", id);
    EntityEl.setAttribute("visible", true);
    EntityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    });
    EntityEl.setAttribute("position", position);
    EntityEl.setAttribute("material", {
      color: "#0077cc",
      opacity: 1
    });
    return EntityEl
  },
  createThumbnail: function(item) {
    const EntityEl = document.createElement("a-entity");

    EntityEl.setAttribute("visible", true);
    EntityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9
    });
    EntityEl.setAttribute("material", {
      src: item.url
    });
    return EntityEl
  },
  createTitleEl: function(position, item) {
    const EntityEl = document.createElement("a-entity");

    EntityEl.setAttribute("visible", true);
    EntityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title
    });
    const ElPosition = position;
    ElPosition.y = -20;
    EntityEl.setAttribute("position", ElPosition);
    return EntityEl
  },
});
