
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "OCSzone4_1": {
            "type": "geojson",
            "data": json_OCSzone4_1
        }
                    ,
        "Pistes_zone4v2_2": {
            "type": "geojson",
            "data": json_Pistes_zone4v2_2
        }
                    ,
        "Hydro_decoup_zone4_3": {
            "type": "geojson",
            "data": json_Hydro_decoup_zone4_3
        }
                    ,
        "Hydrographie_4": {
            "type": "geojson",
            "data": json_Hydrographie_4
        }
                    ,
        "Village_zone4_points_5": {
            "type": "geojson",
            "data": json_Village_zone4_points_5
        }
                    ,
        "Infrastructure_zone4_6": {
            "type": "geojson",
            "data": json_Infrastructure_zone4_6
        }
                    ,
        "AllWaterPointsZone4_7": {
            "type": "geojson",
            "data": json_AllWaterPointsZone4_7
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_OCSzone4_1_0",
            "type": "fill",
            "source": "OCSzone4_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e15989'}
        }
,
        {
            "id": "lyr_Pistes_zone4v2_2_0",
            "type": "line",
            "source": "Pistes_zone4v2_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#f3a6b2'}
        }
,
        {
            "id": "lyr_Hydro_decoup_zone4_3_0",
            "type": "line",
            "source": "Hydro_decoup_zone4_3",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#b7484b'}
        }
,
        {
            "id": "lyr_Hydrographie_4_0",
            "type": "circle",
            "source": "Hydrographie_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Village_zone4_points_5_0",
            "type": "circle",
            "source": "Village_zone4_points_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Infrastructure_zone4_6_0",
            "type": "circle",
            "source": "Infrastructure_zone4_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_AllWaterPointsZone4_7_0",
            "type": "circle",
            "source": "AllWaterPointsZone4_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}