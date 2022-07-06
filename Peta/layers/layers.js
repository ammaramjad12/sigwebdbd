var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kotasemarang_0 = new ol.format.GeoJSON();
var features_kotasemarang_0 = format_kotasemarang_0.readFeatures(json_kotasemarang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kotasemarang_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kotasemarang_0.addFeatures(features_kotasemarang_0);var lyr_kotasemarang_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kotasemarang_0, 
                style: style_kotasemarang_0,
                title: '<img src="styles/legend/kotasemarang_0.png" /> kota semarang'
            });var format_PenderitaPenyakitDB_1 = new ol.format.GeoJSON();
var features_PenderitaPenyakitDB_1 = format_PenderitaPenyakitDB_1.readFeatures(json_PenderitaPenyakitDB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenderitaPenyakitDB_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PenderitaPenyakitDB_1.addFeatures(features_PenderitaPenyakitDB_1);var lyr_PenderitaPenyakitDB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenderitaPenyakitDB_1, 
                style: style_PenderitaPenyakitDB_1,
                title: '<img src="styles/legend/PenderitaPenyakitDB_1.png" /> Penderita Penyakit DB'
            });

lyr_kotasemarang_0.setVisible(true);lyr_PenderitaPenyakitDB_1.setVisible(true);
var layersList = [baseLayer,lyr_kotasemarang_0,lyr_PenderitaPenyakitDB_1];
lyr_kotasemarang_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_PenderitaPenyakitDB_1.set('fieldAliases', {'Puskesmas': 'Puskesmas', 'Laki-laki': 'Laki-laki', 'Perempuan': 'Perempuan', });
lyr_kotasemarang_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_PenderitaPenyakitDB_1.set('fieldImages', {'Puskesmas': 'TextEdit', 'Laki-laki': 'TextEdit', 'Perempuan': 'TextEdit', });
lyr_kotasemarang_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', });
lyr_PenderitaPenyakitDB_1.set('fieldLabels', {'Puskesmas': 'inline label', 'Laki-laki': 'inline label', 'Perempuan': 'inline label', });
lyr_PenderitaPenyakitDB_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});