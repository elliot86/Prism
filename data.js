var APP_DATA = {
  "scenes": [
    {
      "id": "0-survey1",
      "name": "survey1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8031155137020374,
          "pitch": 0.05580457059030941,
          "rotation": 0,
          "target": "1-survey2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.22027976662479531,
          "pitch": 0.025972923818210703,
          "title": "Construction Worker<br>",
          "text": "Text"
        },
        {
          "yaw": 3.134604747014314,
          "pitch": 0.23833133461609002,
          "title": "Cleanaway Bin<br>",
          "text": "Disposal unit<br>"
        },
        {
          "yaw": 2.4918073385257724,
          "pitch": -0.023642114544417225,
          "title": "Boral Concrete Truck<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-survey2",
      "name": "survey2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6244094193521246,
        "pitch": 0.015099204060208038,
        "fov": 1.4853284428373899
      },
      "linkHotspots": [
        {
          "yaw": 0.43696592204202744,
          "pitch": 0.17617994168575812,
          "rotation": 0,
          "target": "0-survey1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3799470442176967,
          "pitch": -0.015967974105869587,
          "title": "Kobelco Bulldozer<br>",
          "text": "<div>Incredible power</div>"
        },
        {
          "yaw": 1.5360076918397354,
          "pitch": 0.20161403470581973,
          "title": "Plastic Chair<br>",
          "text": "<div>No building is complete without a plastic chair</div>"
        },
        {
          "yaw": 0.42646629325637164,
          "pitch": 0.4052389946327075,
          "title": "Wheelbarrow",
          "text": "Not just for fun, can also move things around.<br>"
        },
        {
          "yaw": -0.8755429349883137,
          "pitch": -0.3737384290286201,
          "title": "Concrete delivery system<br>",
          "text": "The future is now<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
