// REVERSE GEOCODE FUNCTION--------------------------------------------------------------------------------------

function getReverseGeocodingData(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        if (status == google.maps.GeocoderStatus.OK) {
            document.getElementById('address').value=(results[0].formatted_address);
        }
    });
}

// INIT MAPS--------------------------------------------------------------------------------------

function initMap() {
    var myLatLng = {lat: 14.5526503, lng: 121.0323753};

// PUBLIC MAP--------------------------------------------------------------------------------------

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13.75,
    center: myLatLng,
    styles: [
        {
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": -100
                },
                {
                    "gamma": 0.54
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#6c8e87"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#b4ede1"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "gamma": 0.48
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "gamma": 7.18
                }
            ]
        }
    ]
});

var map3 = new google.maps.Map(document.getElementById('map3'), {
    zoom: 13,
    center: myLatLng
});
    
// AUTOCOMPLETE--------------------------------------------------------------------------------------

var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('address')),

      );
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
});

var center = new google.maps.LatLng(12.8797, 121.7740);
var circle = new google.maps.Circle({
    center: center,
    radius: 500
});
autocomplete.setBounds(circle.getBounds());

// BOUNDARIES--------------------------------------------------------------------------------------

var makatiPath = [
    new google.maps.LatLng(14.52945999924312, 121.05699751119846),
    new google.maps.LatLng(14.529862642328336, 121.02040114019847),
    new google.maps.LatLng(14.530317029685484, 121.01943973415354),
    new google.maps.LatLng(14.530545514405551, 121.0184795033262),
    new google.maps.LatLng(14.530114508940725, 121.01800743453958),
    new google.maps.LatLng(14.53022567194827, 121.01728255255067),
    new google.maps.LatLng(14.529690808845457, 121.01685876352632),
    new google.maps.LatLng(14.529721965954892, 121.01615066034638),
    new google.maps.LatLng(14.530921511329584, 121.01578051550233),
    new google.maps.LatLng(14.530227086822673, 121.0137226821702),
    new google.maps.LatLng(14.530507499969387, 121.01298775690012),
    new google.maps.LatLng(14.53027901521003, 121.01247277276926),
    new google.maps.LatLng(14.529702609426863, 121.01221528070383),
    new google.maps.LatLng(14.530232279661961, 121.01180222051553),
    new google.maps.LatLng(14.530406888811834, 121.01193364875726),
    new google.maps.LatLng(14.530564488424961, 121.01234407686955),
    new google.maps.LatLng(14.531210994991064, 121.01225824618108),
    new google.maps.LatLng(14.5338949382703, 121.01300451548667),
    new google.maps.LatLng(14.535693651445694, 121.0128718969068),
    new google.maps.LatLng(14.535848134541286, 121.01275656191916),
    new google.maps.LatLng(14.538083200861253, 121.01298891394337),
    new google.maps.LatLng(14.539062918505268, 121.01286016791066),
    new google.maps.LatLng(14.538784184096064, 121.01082855280875),
    new google.maps.LatLng(14.54003224988421, 121.01100461349643),
    new google.maps.LatLng(14.540126459200776, 121.00989877978454),
    new google.maps.LatLng(14.54042633203583, 121.00989877978454),
    new google.maps.LatLng(14.54039970935116, 121.00895844244658),
    new google.maps.LatLng(14.540466800855548, 121.00898314893668),
    new google.maps.LatLng(14.540775743997257, 121.00909106862139),
    new google.maps.LatLng(14.540980851264958, 121.00928418767046),
    new google.maps.LatLng(14.541306009468077, 121.00936012066332),
    new google.maps.LatLng(14.541794577126094, 121.00945491646505),
    new google.maps.LatLng(14.542150267714554, 121.00946966861463),
    new google.maps.LatLng(14.54248653490956, 121.0096665927023),
    new google.maps.LatLng(14.543003193154567, 121.00963977061215),
    new google.maps.LatLng(14.543607718662638, 121.00963055892697),
    new google.maps.LatLng(14.543866046624814, 121.00947096749059),
    new google.maps.LatLng(14.544192556258427, 121.00928136347338),
    new google.maps.LatLng(14.54445956377152, 121.00904275675093),
    new google.maps.LatLng(14.544880156264743, 121.0088040401486),
    new google.maps.LatLng(14.545447232080761, 121.00861410850902),
    new google.maps.LatLng(14.546114402843802, 121.00850343849774),
    new google.maps.LatLng(14.54641054448848, 121.00860230442035),
    new google.maps.LatLng(14.546719495581984, 121.00885845538127),
    new google.maps.LatLng(14.547013968012026, 121.00913465437664),
    new google.maps.LatLng(14.547354072884184, 121.00924730715526),
    new google.maps.LatLng(14.547628028873225, 121.00928665571139),
    new google.maps.LatLng(14.548601798939332, 121.00886160001762),
    new google.maps.LatLng(14.548954254708855, 121.00770345677576),
    new google.maps.LatLng(14.549372616513093, 121.00735597014857),
    new google.maps.LatLng(14.549624447251635, 121.00724197626543),
    new google.maps.LatLng(14.549989247475239, 121.00724624260951),
    new google.maps.LatLng(14.550117758714618, 121.00715102418948),
    new google.maps.LatLng(14.550142422479274, 121.0069927738576),
    new google.maps.LatLng(14.550187855722742, 121.00673796400119),
    new google.maps.LatLng(14.550348995270278, 121.00636574020001),
    new google.maps.LatLng(14.550465823482442, 121.00611629476163),
    new google.maps.LatLng(14.551951279671112, 121.00276652561352),
    new google.maps.LatLng(14.552088239142623, 121.00217375093561),
    new google.maps.LatLng(14.552298528222959, 121.00189748340708),
    new google.maps.LatLng(14.552716509627274, 121.00153806739908),
    new google.maps.LatLng(14.55315266329218, 121.00142273241144),
    new google.maps.LatLng(14.554074543546744, 121.00107063519079),
    new google.maps.LatLng(14.554362714827267, 121.00064416395742),
    new google.maps.LatLng(14.554713192904556, 121.00040276514608),
    new google.maps.LatLng(14.554928671742417, 121.00024987923223),
    new google.maps.LatLng(14.555440257199619, 121.00008919562225),
    new google.maps.LatLng(14.556042556981035, 120.99998727167969),
    new google.maps.LatLng(14.556338902299455, 120.99984873676942),
    new google.maps.LatLng(14.556510245672317, 120.99972133184122),
    new google.maps.LatLng(14.556691973346592, 120.99969316864656),
    new google.maps.LatLng(14.557377185940044, 120.99974057779572),
    new google.maps.LatLng(14.557614729008034, 120.99986664161942),
    new google.maps.LatLng(14.557923554947333, 121.00005101585107),
    new google.maps.LatLng(14.558046869381297, 121.0000215115519),
    new google.maps.LatLng(14.558227297744684, 120.9997868182631),
    new google.maps.LatLng(14.558752905911893, 120.9997088700077),
    new google.maps.LatLng(14.559261353347846, 120.99964469562097),
    new google.maps.LatLng(14.559402934937761, 120.99952185899494),
    new google.maps.LatLng(14.559523652469592, 120.99898139387844),
    new google.maps.LatLng(14.559672295912165, 120.9988900888001),
    new google.maps.LatLng(14.5598176759799, 120.99892227530827),
    new google.maps.LatLng(14.559952671671292, 120.99895043850293),
    new google.maps.LatLng(14.560292780177972, 120.99900848839742),
    new google.maps.LatLng(14.56049008112029, 120.99910504792196),
    new google.maps.LatLng(14.561005844381318, 120.99930924734613),
    new google.maps.LatLng(14.561198846258392, 120.9993731501186),
    new google.maps.LatLng(14.56133643715845, 120.99938387895466),
    new google.maps.LatLng(14.56143638521128, 120.99934096361042),
    new google.maps.LatLng(14.561455855605914, 120.99922562862278),
    new google.maps.LatLng(14.56146364376328, 120.99909285927654),
    new google.maps.LatLng(14.561498690468033, 120.99895338440777),
    new google.maps.LatLng(14.56158565819286, 120.99887560034634),
    new google.maps.LatLng(14.561685606132754, 120.99883134389759),
    new google.maps.LatLng(14.561743831206714, 120.99874828627601),
    new google.maps.LatLng(14.561954111084665, 120.99900980165496),
    new google.maps.LatLng(14.565972329675688, 121.00302979723058),
    new google.maps.LatLng(14.566405861138774, 121.00282863155446),
    new google.maps.LatLng(14.567038458917288, 121.00409155846609),
    new google.maps.LatLng(14.580227009814967, 121.01740440997975),
    new google.maps.LatLng(14.576923809933014, 121.02177166416212),
    new google.maps.LatLng(14.575960295411688, 121.02334162399796),
    new google.maps.LatLng(14.57500500887309, 121.02503678009538),
    new google.maps.LatLng(14.574070485425805, 121.02628132507829),
    new google.maps.LatLng(14.572185681353854, 121.02850863697824),
    new google.maps.LatLng(14.571029916152524, 121.03010453515114),
    new google.maps.LatLng(14.569731942439791, 121.03141881756844),
    new google.maps.LatLng(14.568418385261722, 121.03280283742012),
    new google.maps.LatLng(14.567520222342273, 121.03396209446171),
    new google.maps.LatLng(14.567286583918369, 121.03493841854313),
    new google.maps.LatLng(14.567185209455632, 121.03592855993618),
    new google.maps.LatLng(14.567299432768564, 121.03657765451779),
    new google.maps.LatLng(14.567966862938231, 121.03912747109166),
    new google.maps.LatLng(14.568382218683501, 121.04145562851659),
    new google.maps.LatLng(14.568641815626894, 121.04234612190953),
    new google.maps.LatLng(14.56878718978166, 121.04341900551549),
    new google.maps.LatLng(14.568577167770334, 121.04531800130715),
    new google.maps.LatLng(14.568452561239111, 121.04612266401162),
    new google.maps.LatLng(14.568426975283018, 121.04747372502972),
    new google.maps.LatLng(14.568323136441146, 121.048063811013),
    new google.maps.LatLng(14.568541197952575, 121.04929762715985),
    new google.maps.LatLng(14.56851004632129, 121.05040269727398),
    new google.maps.LatLng(14.568073923021114, 121.05128246183087),
    new google.maps.LatLng(14.567866244955896, 121.05172234410931),
    new google.maps.LatLng(14.566814687610815, 121.05320802324074),
    new google.maps.LatLng(14.566170881294903, 121.05443111055153),
    new google.maps.LatLng(14.565838593428596, 121.0551284848954),
    new google.maps.LatLng(14.565516689080596, 121.05576148622292),
    new google.maps.LatLng(14.565381696794804, 121.05642667405861),
    new google.maps.LatLng(14.565257088457646, 121.05720987909096),
    new google.maps.LatLng(14.565142864086734, 121.05778923623818),
    new google.maps.LatLng(14.565039023698198, 121.05829349153298),
    new google.maps.LatLng(14.564727502239176, 121.05902305238503),
    new google.maps.LatLng(14.564029441884436, 121.05995294662496),
    new google.maps.LatLng(14.56355177328053, 121.0606074056246),
    new google.maps.LatLng(14.561913868240875, 121.06231511693923),
    new google.maps.LatLng(14.561301200271515, 121.06359184843032),
    new google.maps.LatLng(14.561093515827912, 121.06434286695449),
    new google.maps.LatLng(14.560915543364386, 121.06550069413622),
    new google.maps.LatLng(14.560827277345421, 121.06593521199663),
    new google.maps.LatLng(14.560692282189269, 121.06621952615221),
    new google.maps.LatLng(14.560310660820171, 121.06645019612749),
    new google.maps.LatLng(14.559614492445, 121.06675989027542),
    new google.maps.LatLng(14.55891874346927, 121.06672770376724),
    new google.maps.LatLng(14.55836837332213, 121.06671697493118),
    new google.maps.LatLng(14.557568776511078, 121.06655604239029),
    new google.maps.LatLng(14.556976865316846, 121.06633073683304),
    new google.maps.LatLng(14.55670687020966, 121.06627709265274),
    new google.maps.LatLng(14.555959189727071, 121.06562799807114),
    new google.maps.LatLng(14.555262182890575, 121.06529032836202),
    new google.maps.LatLng(14.55488834051839, 121.06522595534567),
    new google.maps.LatLng(14.554384690765618, 121.06503820071462),
    new google.maps.LatLng(14.553570165747983, 121.06468442938575),
    new google.maps.LatLng(14.552926320776741, 121.06451813242683),
    new google.maps.LatLng(14.552407089593082, 121.06442693732032),
    new google.maps.LatLng(14.551885224473825, 121.06428746245155),
    new google.maps.LatLng(14.551615223137192, 121.06426600477943),
    new google.maps.LatLng(14.551127142959764, 121.06449131033668),
    new google.maps.LatLng(14.550877910112483, 121.06489900610694),
    new google.maps.LatLng(14.550711754724606, 121.06517795584449),
    new google.maps.LatLng(14.550364905773959, 121.06681801178023),
    new google.maps.LatLng(14.550261058429856, 121.06702722408339),
    new google.maps.LatLng(14.549965093231167, 121.0672632584767),
    new google.maps.LatLng(14.54925892904897, 121.06743491985365),
    new google.maps.LatLng(14.548755266450687, 121.0671503030644),
    new google.maps.LatLng(14.548500838515757, 121.066898175417),
    new google.maps.LatLng(14.547940265493072, 121.0660075595712),
    new google.maps.LatLng(14.54756641071975, 121.0657715251779),
    new google.maps.LatLng(14.546971030740893, 121.06564985468526),
    new google.maps.LatLng(14.54640505342278, 121.06571422770162),
    new google.maps.LatLng(14.546179181335779, 121.0657115454926),
    new google.maps.LatLng(14.545979271364876, 121.06564717247625),
    new google.maps.LatLng(14.545748206367827, 121.06550233318944),
    new google.maps.LatLng(14.545249728247411, 121.06498198464055),
    new google.maps.LatLng(14.544932986357063, 121.06469498827596),
    new google.maps.LatLng(14.544520182719747, 121.0644509072556),
    new google.maps.LatLng(14.544263153650101, 121.06442140295644),
    new google.maps.LatLng(14.543968754944807, 121.06432387596219),
    new google.maps.LatLng(14.543402769931848, 121.06432119375317),
    new google.maps.LatLng(14.543231416385002, 121.06422999864667),
    new google.maps.LatLng(14.543000348512832, 121.06411734586804),
    new google.maps.LatLng(14.542803411861923, 121.0639552284898),
    new google.maps.LatLng(14.542735908782218, 121.06373126403706),
    new google.maps.LatLng(14.542737206918561, 121.06344829098599),
    new google.maps.LatLng(14.542811200677486, 121.06329406396763),
    new google.maps.LatLng(14.542917647795957, 121.06317068235295),
    new google.maps.LatLng(14.543187325695714, 121.06297367146578),
    new google.maps.LatLng(14.54351964767118, 121.0628864996728),
    new google.maps.LatLng(14.544239561375258, 121.06277549834999),
    new google.maps.LatLng(14.544517360487385, 121.06264675231728),
    new google.maps.LatLng(14.544784774255831, 121.06249118419441),
    new google.maps.LatLng(14.545002859031149, 121.0623812136248),
    new google.maps.LatLng(14.545135267539658, 121.0622175988749),
    new google.maps.LatLng(14.545373152208711, 121.06181484851555),
    new google.maps.LatLng(14.545353955965322, 121.06160998668577),
    new google.maps.LatLng(14.545226740074783, 121.06134713020231),
    new google.maps.LatLng(14.545072263537786, 121.06119960870649),
    new google.maps.LatLng(14.544931421836706, 121.06108709291908),
    new google.maps.LatLng(14.54480550382699, 121.0610374720523),
    new google.maps.LatLng(14.544566648848372, 121.06095164136383),
    new google.maps.LatLng(14.544406898284151, 121.06095869232632),
    new google.maps.LatLng(14.544275353293438, 121.06096539784886),
    new google.maps.LatLng(14.544157223677734, 121.06093857575871),
    new google.maps.LatLng(14.54403649774143, 121.06091443587758),
    new google.maps.LatLng(14.543965100651278, 121.06094528128125),
    new google.maps.LatLng(14.543858654037635, 121.06105616565301),
    new google.maps.LatLng(14.543602079216884, 121.06132714594195),
    new google.maps.LatLng(14.543480054845173, 121.06158463800737),
    new google.maps.LatLng(14.54336322293672, 121.06178043926546),
    new google.maps.LatLng(14.543243794699752, 121.06204329574892),
    new google.maps.LatLng(14.543119173861896, 121.06219886387179),
    new google.maps.LatLng(14.5430101305711, 121.06231419885943),
    new google.maps.LatLng(14.542877720788447, 121.062418805011),
    new google.maps.LatLng(14.54269338546866, 121.06248317802736),
    new google.maps.LatLng(14.542464913309503, 121.06255559767077),
    new google.maps.LatLng(14.542134368266721, 121.06257253069498),
    new google.maps.LatLng(14.541963013735824, 121.0625215687237),
    new google.maps.LatLng(14.541279888811978, 121.06233420847535),
    new google.maps.LatLng(14.540781400606429, 121.06248441218018),
    new google.maps.LatLng(14.540345222503783, 121.0632247018683),
    new google.maps.LatLng(14.540137518342675, 121.06394353388428),
    new google.maps.LatLng(14.53945209322545, 121.06482329844117),
    new google.maps.LatLng(14.537587260866042, 121.06649111576337),
    new google.maps.LatLng(14.537151076457105, 121.06696318454999),
    new google.maps.LatLng(14.53669412043849, 121.06724213428754),
    new google.maps.LatLng(14.536455256689033, 121.0672528631236),
    new google.maps.LatLng(14.535998299231432, 121.06704901523847),
    new google.maps.LatLng(14.535520569969961, 121.06646965809125),
    new google.maps.LatLng(14.535288034407348, 121.06592258934643),
    new google.maps.LatLng(14.53517639088967, 121.06538614754345),
    new google.maps.LatLng(14.535215336309216, 121.06494358305599),
    new google.maps.LatLng(14.535309630791433, 121.06368071508388),
    new google.maps.LatLng(14.535320016231076, 121.06248981428126),
    new google.maps.LatLng(14.535252510864806, 121.06165832948665),
    new google.maps.LatLng(14.5349824891935, 121.06126136255244),
    new google.maps.LatLng(14.534717659926166, 121.06119698953609),
    new google.maps.LatLng(14.534369746484781, 121.06114870977382),
    new google.maps.LatLng(14.534006254244574, 121.0611648030279),
    new google.maps.LatLng(14.533668725200487, 121.06119698953609),
    new google.maps.LatLng(14.533351966705633, 121.06120771837215),
    new google.maps.LatLng(14.5330975210285, 121.06132037115077),
    new google.maps.LatLng(14.53260681808609, 121.06147818428921),
    new google.maps.LatLng(14.531365739359963, 121.05983130795407),
    new google.maps.LatLng(14.529241868805752, 121.05901891220344),
    new google.maps.LatLng(14.52899261126593, 121.05855220783485),
    new google.maps.LatLng(14.52945977558224, 121.05699722497825)];
    
    var polyline = new google.maps.Polygon({
        paths:makatiPath, 
        strokeColor: "orange", 
        strokeOpacity: 1.0, 
        strokeWeight: 3,
        fillOpacity: 0.1});
    
    polyline.setMap(map);

var belAirPath = [
    new google.maps.LatLng(14.564486957010674, 121.0163155297671),  
    new google.maps.LatLng(14.563053951068056, 121.01552159589869),
    new google.maps.LatLng(14.56191169328536, 121.01534993452174),
    new google.maps.LatLng(14.561309409527121, 121.0154143075381),
    new google.maps.LatLng(14.560624050146595, 121.01560742658717),
    new google.maps.LatLng(14.559897151506979, 121.01605803770167),
    new google.maps.LatLng(14.55458033434668, 121.02434069913966),
    new google.maps.LatLng(14.561247104216886, 121.02770955366236),
    new google.maps.LatLng(14.560795349279303, 121.02885749803669),
    new google.maps.LatLng(14.560089219753829, 121.02998402582294),
    new google.maps.LatLng(14.558147351904037, 121.03215125070697),
    new google.maps.LatLng(14.556517000456795, 121.03342798219806),
    new google.maps.LatLng(14.555053669065698, 121.03451741091858),
    new google.maps.LatLng(14.559996641103066, 121.04078305117737),
    new google.maps.LatLng(14.56223963389957, 121.03949559085022),
    new google.maps.LatLng(14.563070366183927, 121.0391104899353),
    new google.maps.LatLng(14.562987293096297, 121.03735096082153),
    new google.maps.LatLng(14.563049597914961, 121.0359776698059),
    new google.maps.LatLng(14.562945756540758, 121.03466875180663),
    new google.maps.LatLng(14.562862683406196, 121.03398210629882),
    new google.maps.LatLng(14.56178272980945, 121.03288776502075),
    new google.maps.LatLng(14.562967628953988, 121.03140957578941),
    new google.maps.LatLng(14.562279678683222, 121.03079266771599),
    new google.maps.LatLng(14.562505718995878, 121.03030402162692),
    new google.maps.LatLng(14.56258619622569, 121.02987620928904),
    new google.maps.LatLng(14.56255634177288, 121.02949399450442),
    new google.maps.LatLng(14.562384608886493, 121.02896088125536),
    new google.maps.LatLng(14.562187309638825, 121.02873959901163),
    new google.maps.LatLng(14.56244950991622, 121.02867254378626),
    new google.maps.LatLng(14.562849464107762, 121.0284964202351),
    new google.maps.LatLng(14.564512698478943, 121.02928825321553),
    new google.maps.LatLng(14.56664809872742, 121.02355987938392),
    new google.maps.LatLng(14.565364866496818, 121.0230696285032),
    new google.maps.LatLng(14.565811379160804, 121.02194310071694),
    new google.maps.LatLng(14.562677382442182, 121.02073945194266),
    new google.maps.LatLng(14.564487465160605, 121.01631578377491)];

let polyline1 = new google.maps.Polygon({
        paths:belAirPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});

var bangkalPath = [
    new google.maps.LatLng(14.538790085033146, 121.01082976306392),
    new google.maps.LatLng(14.539117357406582, 121.01315481604752),
    new google.maps.LatLng(14.539844324473158, 121.0152576679152),
    new google.maps.LatLng(14.54121517014687, 121.01834757270035),
    new google.maps.LatLng(14.548205289983207, 121.01450593819628),
    new google.maps.LatLng(14.547493852220184, 121.01301816852933),
    new google.maps.LatLng(14.548742445811731, 121.01228213718126),
    new google.maps.LatLng(14.548551715585333, 121.01175249461414),
    new google.maps.LatLng(14.548421905331406, 121.01079762820484),
    new google.maps.LatLng(14.548125937667063, 121.00910783652546),
    new google.maps.LatLng(14.547622772536398, 121.00933255088921),
    new google.maps.LatLng(14.547347573549557, 121.00926281345482),
    new google.maps.LatLng(14.546869868833404, 121.00905360115166),
    new google.maps.LatLng(14.546340238483452, 121.00857080352898),
    new google.maps.LatLng(14.545924841241613, 121.00852252376671),
    new google.maps.LatLng(14.54514874702876, 121.00868597053132),
    new google.maps.LatLng(14.544660652555677, 121.00895955585084),
    new google.maps.LatLng(14.543840236010773, 121.00949063323579),
    new google.maps.LatLng(14.543490274242865, 121.00966525260854),
    new google.maps.LatLng(14.542576387485573, 121.00965452377248),
    new google.maps.LatLng(14.542025976591278, 121.00946140472341),
    new google.maps.LatLng(14.541392483109533, 121.00939703170705),
    new google.maps.LatLng(14.540883609980433, 121.00920391265798),
    new google.maps.LatLng(14.540520128456237, 121.00898933593679),
    new google.maps.LatLng(14.54041855347833, 121.0089607302317),
    new google.maps.LatLng(14.54041855374122, 121.00989682065776),
    new google.maps.LatLng(14.540073245580457, 121.0099048672848),
    new google.maps.LatLng(14.54006093765913, 121.01100625329369),
    new google.maps.LatLng(14.53879021037009, 121.01083043562569)];
    
    var polyline2 = new google.maps.Polygon({
        paths:bangkalPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var carmonaPath = [
    new google.maps.LatLng(14.579493466519196, 121.01829465329753),
    new google.maps.LatLng(14.576689941398229, 121.01520474851237),
    new google.maps.LatLng(14.575132412027385, 121.01655658185588),
    new google.maps.LatLng(14.573055689074401, 121.0160201400529),
    new google.maps.LatLng(14.572058855105796, 121.01889546811687),
    new google.maps.LatLng(14.572038087683493, 121.01945336759196),
    new google.maps.LatLng(14.572287296621818, 121.0201614707719),
    new google.maps.LatLng(14.572827248354814, 121.0205047935258),
    new google.maps.LatLng(14.575963095728602, 121.0211699813615),
    new google.maps.LatLng(14.576814543272269, 121.0217278808366),
    new google.maps.LatLng(14.579486034481832, 121.01828106553677)];
    
    var polyline3 = new google.maps.Polygon({
        paths:carmonaPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var cemboPath = [
    new google.maps.LatLng(14.568317145072905, 121.04713305885709),
    new google.maps.LatLng(14.566936083787674, 121.04718670303738),
    new google.maps.LatLng(14.56665571690648, 121.0473154490701),
    new google.maps.LatLng(14.56618324598529, 121.04764804298794),
    new google.maps.LatLng(14.565783462107383, 121.0476748650781),
    new google.maps.LatLng(14.565102396055208, 121.04785189087308),
    new google.maps.LatLng(14.564946635425477, 121.04795381481564),
    new google.maps.LatLng(14.56382164062748, 121.0487745707742),
    new google.maps.LatLng(14.563510117448747, 121.04913935120022),
    new google.maps.LatLng(14.563395892172966, 121.0498367255441),
    new google.maps.LatLng(14.562897453913525, 121.05020150597012),
    new google.maps.LatLng(14.562315941187139, 121.04997083599484),
    new google.maps.LatLng(14.562129026056612, 121.04997083599484),
    new google.maps.LatLng(14.561907064133374, 121.04987829978383),
    new google.maps.LatLng(14.561809712342178, 121.04966774637616),
    new google.maps.LatLng(14.561617604681514, 121.04964494759953),
    new google.maps.LatLng(14.562187837252681, 121.05087944087198),
    new google.maps.LatLng(14.56258243557058, 121.05189868029764),
    new google.maps.LatLng(14.562509746459806, 121.05268188532999),
    new google.maps.LatLng(14.562146300546576, 121.05414100703409),
    new google.maps.LatLng(14.564628105006383, 121.05438777026346),
    new google.maps.LatLng(14.566175324615056, 121.05450578746012),
    new google.maps.LatLng(14.56706098958874, 121.05276771601847),
    new google.maps.LatLng(14.567891703709964, 121.05170556124857),
    new google.maps.LatLng(14.568390130680282, 121.05025716838053),
    new google.maps.LatLng(14.56854588887741, 121.04880877551248),
    new google.maps.LatLng(14.568275907932444, 121.0479826551359),
    new google.maps.LatLng(14.568348595142458, 121.04767151889017),
    new google.maps.LatLng(14.568318463960578, 121.04713580522326)];
    
    var polyline4 = new google.maps.Polygon({
        paths:cemboPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var comemboPath = [
    new google.maps.LatLng(14.545894584994254, 121.06296966764923),
    new google.maps.LatLng(14.54594650969932, 121.06270144674774),
    new google.maps.LatLng(14.545240332664118, 121.06216500494476),
    new google.maps.LatLng(14.544783393379138, 121.06248687002655),
    new google.maps.LatLng(14.544367993208695, 121.06270144674774),
    new google.maps.LatLng(14.543879897009985, 121.06283019278045),
    new google.maps.LatLng(14.543474880196367, 121.06291602346893),
    new google.maps.LatLng(14.543163328295847, 121.0630018541574),
    new google.maps.LatLng(14.542747925078192, 121.06336663458343),
    new google.maps.LatLng(14.54281023561066, 121.06403182241912),
    new google.maps.LatLng(14.543371029611684, 121.06428931448455),
    new google.maps.LatLng(14.54406682759652, 121.06428931448455),
    new google.maps.LatLng(14.544773008384393, 121.06455753538604),
    new google.maps.LatLng(14.545354567337636, 121.06504033300872),
    new google.maps.LatLng(14.545769965652239, 121.06550167295929),
    new google.maps.LatLng(14.546403446577509, 121.06576989386078),
    new google.maps.LatLng(14.547358856994528, 121.06572697851654),
    new google.maps.LatLng(14.54802348788979, 121.06609175894256),
    new google.maps.LatLng(14.54834541776042, 121.06677840445037),
    new google.maps.LatLng(14.549434443773915, 121.06749027498337),
    new google.maps.LatLng(14.550078298930755, 121.06721132524582),
    new google.maps.LatLng(14.550483303631779, 121.06653540857407),
    new google.maps.LatLng(14.55058715087132, 121.06563418634506),
    new google.maps.LatLng(14.551002539340947, 121.06463640459152),
    new google.maps.LatLng(14.551308887836477, 121.06438427694412),
    new google.maps.LatLng(14.550779268135695, 121.0643789125261),
    new google.maps.LatLng(14.55116869450994, 121.06342941053482),
    new google.maps.LatLng(14.54941791366896, 121.06376213046592),
    new google.maps.LatLng(14.54916082433392, 121.06285356721983),
    new google.maps.LatLng(14.548195036880756, 121.06244318924055),
    new google.maps.LatLng(14.547976955258235, 121.06273286781416),
    new google.maps.LatLng(14.547927627242323, 121.06259875736342),
    new google.maps.LatLng(14.545894526753194, 121.06296837329865)];
    
    var polyline5 = new google.maps.Polygon({
        paths:comemboPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var dasmarinasPath = [
    new google.maps.LatLng(14.541679480247673, 121.01940722789809),
    new google.maps.LatLng(14.53249882535042, 121.02438540782973),
    new google.maps.LatLng(14.532041859712164, 121.02485747661635),
    new google.maps.LatLng(14.532208029144469, 121.0255870374684),
    new google.maps.LatLng(14.532208029144469, 121.02674575176283),
    new google.maps.LatLng(14.533121958789136, 121.0273894819264),
    new google.maps.LatLng(14.533371211672716, 121.02859111156508),
    new google.maps.LatLng(14.534004834647169, 121.02891621668299),
    new google.maps.LatLng(14.53398406364383, 121.02935609896143),
    new google.maps.LatLng(14.534430639785556, 121.02947948057611),
    new google.maps.LatLng(14.534306013976316, 121.03008029539545),
    new google.maps.LatLng(14.534679891193193, 121.03014466841181),
    new google.maps.LatLng(14.534913564132554, 121.03134093363245),
    new google.maps.LatLng(14.534524109096372, 121.03170034964045),
    new google.maps.LatLng(14.534518447985455, 121.0324348292523),
    new google.maps.LatLng(14.53403033002511, 121.03356135703855),
    new google.maps.LatLng(14.534497677030384, 121.03433383323484),
    new google.maps.LatLng(14.535453138943188, 121.03503120757871),
    new google.maps.LatLng(14.53591529023389, 121.03607726909452),
    new google.maps.LatLng(14.535936061055706, 121.03642059184843),
    new google.maps.LatLng(14.538268752853343, 121.03535784384658),
    new google.maps.LatLng(14.540553507211971, 121.03314770361831),
    new google.maps.LatLng(14.541830882304465, 121.03210700652053),
    new google.maps.LatLng(14.54407405971171, 121.03116286894729),
    new google.maps.LatLng(14.545382569344257, 121.03066934248855),
    new google.maps.LatLng(14.546050101889632, 121.03255776175472),
    new google.maps.LatLng(14.546787431038124, 121.03230026968929),
    new google.maps.LatLng(14.547867458022138, 121.03240755804988),
    new google.maps.LatLng(14.548459393647086, 121.03269723662349),
    new google.maps.LatLng(14.549535777980141, 121.03018186817931),
    new google.maps.LatLng(14.550262710751255, 121.02940939198302),
    new google.maps.LatLng(14.541691076170194, 121.01939870886497)];
    
    var polyline6 = new google.maps.Polygon({
        paths:dasmarinasPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var eastRemboPath = [
    new google.maps.LatLng(14.549216950826976, 121.05693249024391),
    new google.maps.LatLng(14.547856539673521, 121.0566428116703),
    new google.maps.LatLng(14.547887694221199, 121.05692176140785),
    new google.maps.LatLng(14.548085006254428, 121.05745820321083),
    new google.maps.LatLng(14.548515976661186, 121.05767277993202),
    new google.maps.LatLng(14.548323857427157, 121.05848280705452),
    new google.maps.LatLng(14.548744442559714, 121.05863301075935),
    new google.maps.LatLng(14.547667956843943, 121.0621971226521),
    new google.maps.LatLng(14.54798616155621, 121.0627027652751),
    new google.maps.LatLng(14.548209435586381, 121.06245600204574),
    new google.maps.LatLng(14.549133683820916, 121.06283151130782),
    new google.maps.LatLng(14.549419241622022, 121.06376359834066),
    new google.maps.LatLng(14.551140274454708, 121.06343023161963),
    new google.maps.LatLng(14.5508053677711, 121.06439046244697),
    new google.maps.LatLng(14.55114287062856, 121.0644494710453),
    new google.maps.LatLng(14.551431045736907, 121.0642697630413),
    new google.maps.LatLng(14.551973785868908, 121.06432532207431),
    new google.maps.LatLng(14.553365325423105, 121.06459890739383),
    new google.maps.LatLng(14.555183010297055, 121.06530625918093),
    new google.maps.LatLng(14.556418762963741, 121.06593926050844),
    new google.maps.LatLng(14.557041828910757, 121.06646497347536),
    new google.maps.LatLng(14.55830872424361, 121.0666151771802),
    new google.maps.LatLng(14.55815295881624, 121.06553692915621),
    new google.maps.LatLng(14.557716815034514, 121.06475372412386),
    new google.maps.LatLng(14.557690854067936, 121.06419582464876),
    new google.maps.LatLng(14.556259192698906, 121.06302198955787),
    new google.maps.LatLng(14.55776493348127, 121.06168088505042),
    new google.maps.LatLng(14.557567630101733, 121.06143948623908),
    new google.maps.LatLng(14.557084755296913, 121.06117662975562),
    new google.maps.LatLng(14.556305922739757, 121.06087085792792),
    new google.maps.LatLng(14.5555712215077, 121.06079843828452),
    new google.maps.LatLng(14.555525807256583, 121.05991375950101),
    new google.maps.LatLng(14.555468692558941, 121.05977428463224),
    new google.maps.LatLng(14.555712727981872, 121.05944705513242),
    new google.maps.LatLng(14.555390808856531, 121.05912519005064),
    new google.maps.LatLng(14.555115619554464, 121.05940950420622),
    new google.maps.LatLng(14.554944275098698, 121.05935049560789),
    new google.maps.LatLng(14.554362741408307, 121.05927002933744),
    new google.maps.LatLng(14.554238126846704, 121.05935586002592),
    new google.maps.LatLng(14.553988897512383, 121.05935586002592),
    new google.maps.LatLng(14.553635822140315, 121.05914128330473),
    new google.maps.LatLng(14.553537168626574, 121.05923247841123),
    new google.maps.LatLng(14.55338139983087, 121.05910373237852),
    new google.maps.LatLng(14.553495630291795, 121.0588676979852),
    new google.maps.LatLng(14.553287938500665, 121.05870140102628),
    new google.maps.LatLng(14.5532152463276, 121.0587765028787),
    new google.maps.LatLng(14.552991977360593, 121.0586155703378),
    new google.maps.LatLng(14.55291928509005, 121.05872822311643),
    new google.maps.LatLng(14.55279986202217, 121.05874968078855),
    new google.maps.LatLng(14.552856977410528, 121.0591359188867),
    new google.maps.LatLng(14.552867362024994, 121.05921102073911),
    new google.maps.LatLng(14.552805054330815, 121.0605413964105),
    new google.maps.LatLng(14.550754082911924, 121.0589213421655),
    new google.maps.LatLng(14.550224461880005, 121.05844927337888),
    new google.maps.LatLng(14.549975228013558, 121.05778944996122),
    new google.maps.LatLng(14.549217139940087, 121.05693650749448)];
    
    var polyline7 = new google.maps.Polygon({
        paths:eastRemboPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var forbesParkPath = [
    new google.maps.LatLng(14.54541817013063, 121.0307069939623),
    new google.maps.LatLng(14.541596470075396, 121.03225194635488),
    new google.maps.LatLng(14.539079696310385, 121.03470546523714),
    new google.maps.LatLng(14.536350633425002, 121.03615365739165),
    new google.maps.LatLng(14.5361298670183, 121.0363003180591),
    new google.maps.LatLng(14.536711448726773, 121.03783454161562),
    new google.maps.LatLng(14.5371580193568, 121.0383709834186),
    new google.maps.LatLng(14.538009616661222, 121.03870357733645),
    new google.maps.LatLng(14.539027374987722, 121.03900398474612),
    new google.maps.LatLng(14.539910120759744, 121.03946532469668),
    new google.maps.LatLng(14.540543618492707, 121.04031290274538),
    new google.maps.LatLng(14.540984988790212, 121.041778838763),
    new google.maps.LatLng(14.541036914649602, 121.04316285861468),
    new google.maps.LatLng(14.541338084393255, 121.04490093005633),
    new google.maps.LatLng(14.542023503658463, 121.04541591418719),
    new google.maps.LatLng(14.543051628568215, 121.04612401736712),
    new google.maps.LatLng(14.547226389630845, 121.04465416682696),
    new google.maps.LatLng(14.549668813164613, 121.04370879336354),
    new google.maps.LatLng(14.551610755624175, 121.0434513012981),
    new google.maps.LatLng(14.553864218238388, 121.04275392695423),
    new google.maps.LatLng(14.555816508260087, 121.04161667033192),
    new google.maps.LatLng(14.555855393089736, 121.0402468264248),
    new google.maps.LatLng(14.556021544605183, 121.0392383158352),
    new google.maps.LatLng(14.556333078359456, 121.03792939783594),
    new google.maps.LatLng(14.55661345836223, 121.03723202349207),
    new google.maps.LatLng(14.550059092857099, 121.0293936954803),
    new google.maps.LatLng(14.54952427777205, 121.03015544284052),
    new google.maps.LatLng(14.548439066481718, 121.03260966408915),
    new google.maps.LatLng(14.547847130802266, 121.03241654504008),
    new google.maps.LatLng(14.546902107393159, 121.0322770701713),
    new google.maps.LatLng(14.546071314242083, 121.03256674874491),
    new google.maps.LatLng(14.545412612396937, 121.0307084722836)];
    
    var polyline8 = new google.maps.Polygon({
        paths:forbesParkPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var guadalupeNievoPath = [
    new google.maps.LatLng(14.568440700251783, 121.04613216427919),
    new google.maps.LatLng(14.565782410665815, 121.04523630646821),
    new google.maps.LatLng(14.564359797214843, 121.04472132233735),
    new google.maps.LatLng(14.562934366864168, 121.04393222010896),
    new google.maps.LatLng(14.562275803835348, 121.0434293787819),
    new google.maps.LatLng(14.56016392929651, 121.0410895837037),
    new google.maps.LatLng(14.559784903085546, 121.04141144878548),
    new google.maps.LatLng(14.559753750217318, 121.04169039852303),
    new google.maps.LatLng(14.558527171631903, 121.0446848372006),
    new google.maps.LatLng(14.558198766385853, 121.04474384579893),
    new google.maps.LatLng(14.558013765287019, 121.04495049801147),
    new google.maps.LatLng(14.558468017251135, 121.04581282820976),
    new google.maps.LatLng(14.557803417807778, 121.04628221478737),
    new google.maps.LatLng(14.55746807273646, 121.04660067603074),
    new google.maps.LatLng(14.558076189801698, 121.04721365411864),
    new google.maps.LatLng(14.558442238508952, 121.04725656946287),
    new google.maps.LatLng(14.559491659136176, 121.0482761355543),
    new google.maps.LatLng(14.559637039322991, 121.04874820434092),
    new google.maps.LatLng(14.560130292814144, 121.04882330619334),
    new google.maps.LatLng(14.56068065856554, 121.04841561042308),
    new google.maps.LatLng(14.561579078435768, 121.04966061353308),
    new google.maps.LatLng(14.561804934761694, 121.04966195463759),
    new google.maps.LatLng(14.561917862837928, 121.04988726019484),
    new google.maps.LatLng(14.56210088408009, 121.04997979640585),
    new google.maps.LatLng(14.562348806229743, 121.04995699762922),
    new google.maps.LatLng(14.562822843110071, 121.05009244918448),
    new google.maps.LatLng(14.56313436725964, 121.05000125407797),
    new google.maps.LatLng(14.56338358626245, 121.04967402457815),
    new google.maps.LatLng(14.563632804983628, 121.04910003184897),
    new google.maps.LatLng(14.564499876256594, 121.04848848819357),
    new google.maps.LatLng(14.564825833187168, 121.04815534037141),
    new google.maps.LatLng(14.5649322696877, 121.04796892684487),
    new google.maps.LatLng(14.565164612601837, 121.04783883970765),
    new google.maps.LatLng(14.565775566915573, 121.04769580789942),
    new google.maps.LatLng(14.566576705097022, 121.04748762710824),
    new google.maps.LatLng(14.56691937580395, 121.04722477062478),
    new google.maps.LatLng(14.568326396911576, 121.04702628715768),
    new google.maps.LatLng(14.568439725628139, 121.04613276366054)];
    
    var polyline9 = new google.maps.Polygon({
        paths:guadalupeNievoPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var guadalupeViejoPath = [
    new google.maps.LatLng(14.566884253461014, 121.03755926369728),
    new google.maps.LatLng(14.562813705764652, 121.03897547005714),
    new google.maps.LatLng(14.56108993077891, 121.0398586012179),
    new google.maps.LatLng(14.559739977107117, 121.04069545043055),
    new google.maps.LatLng(14.561643233067185, 121.04276686920274),
    new google.maps.LatLng(14.562349357617775, 121.0435178877269),
    new google.maps.LatLng(14.563481229019347, 121.04427963508714),
    new google.maps.LatLng(14.564901173717164, 121.04491941244008),
    new google.maps.LatLng(14.56591621205251, 121.04525737077596),
    new google.maps.LatLng(14.568465143079539, 121.04594795411555),
    new google.maps.LatLng(14.56861488452358, 121.04484930073579),
    new google.maps.LatLng(14.568749874829834, 121.0427786353763),
    new google.maps.LatLng(14.56741035197771, 121.03740348851045),
    new google.maps.LatLng(14.566883769901809, 121.03755991916816)];
    
    var polyline10 = new google.maps.Polygon({
        paths:guadalupeViejoPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var kasilawanPath = [
    new google.maps.LatLng(14.575301484855718, 121.0124122761413),
    new google.maps.LatLng(14.57493806003057, 121.01278778540339),
    new google.maps.LatLng(14.57496921075335, 121.01329740511622),
    new google.maps.LatLng(14.57513534786716, 121.01401623713221),
    new google.maps.LatLng(14.574906909303376, 121.01494159924235),
    new google.maps.LatLng(14.575275525959515, 121.01559069382395),
    new google.maps.LatLng(14.575509155915269, 121.0164275430366),
    new google.maps.LatLng(14.576689326483132, 121.01518854185694),
    new google.maps.LatLng(14.57936764095557, 121.01784448548558),
    new google.maps.LatLng(14.58006332539482, 121.01719002648595),
    new google.maps.LatLng(14.575313006017089, 121.0124087386254)];
    
    var polyline11 = new google.maps.Polygon({
        paths:kasilawanPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var laPazPath = [
    new google.maps.LatLng(14.567265602169478, 121.00435138274466),
    new google.maps.LatLng(14.566689292943801, 121.01292372275626),
    new google.maps.LatLng(14.567982092619694, 121.01359963942801),
    new google.maps.LatLng(14.570894758084224, 121.008015280259),
    new google.maps.LatLng(14.567260511173345, 121.00435137748718)];
    
    var polyline12 = new google.maps.Polygon({
        paths:laPazPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var magallanesPath = [
    new google.maps.LatLng(14.539059226532366, 121.01284458600949),
    new google.maps.LatLng(14.54038361921424, 121.01684775540235),
    new google.maps.LatLng(14.541816560918226, 121.01925922824336),
    new google.maps.LatLng(14.532362390975168, 121.02438533292421),
    new google.maps.LatLng(14.531926151129687, 121.02493546484479),
    new google.maps.LatLng(14.531460518326126, 121.02489594229691),
    new google.maps.LatLng(14.53142936146172, 121.02482620486252),
    new google.maps.LatLng(14.531525428446209, 121.02428976305954),
    new google.maps.LatLng(14.531135967439823, 121.02424148329727),
    new google.maps.LatLng(14.531247612998488, 121.02333757885926),
    new google.maps.LatLng(14.530820012718337, 121.02310928281256),
    new google.maps.LatLng(14.530853766080957, 121.02254601891943),
    new google.maps.LatLng(14.530278986642328, 121.02172001314193),
    new google.maps.LatLng(14.53021147973639, 121.02119966459304),
    new google.maps.LatLng(14.529873944897563, 121.0203467221263),
    new google.maps.LatLng(14.530370655133694, 121.01940453290715),
    new google.maps.LatLng(14.530552404317957, 121.01842820882572),
    new google.maps.LatLng(14.530122610346229, 121.01791294320195),
    new google.maps.LatLng(14.530195310119446, 121.0172906707105),
    new google.maps.LatLng(14.529592939848351, 121.01675422890752),
    new google.maps.LatLng(14.52971756831496, 121.01621778710454),
    new google.maps.LatLng(14.530922306536587, 121.01564915879338),
    new google.maps.LatLng(14.53019011727929, 121.01379307015507),
    new google.maps.LatLng(14.530522458803029, 121.0128972123441),
    new google.maps.LatLng(14.530257624191742, 121.01244123681157),
    new google.maps.LatLng(14.529740936144647, 121.01220788462727),
    new google.maps.LatLng(14.530171942337809, 121.01181896432011),
    new google.maps.LatLng(14.530441969886105, 121.01202012999623),
    new google.maps.LatLng(14.530621122596706, 121.012339312869),
    new google.maps.LatLng(14.531190417825396, 121.01227269341301),
    new google.maps.LatLng(14.532945582906265, 121.01273403336357),
    new google.maps.LatLng(14.533890338719798, 121.01299232781396),
    new google.maps.LatLng(14.53568702405215, 121.01293868363366),
    new google.maps.LatLng(14.53583272634487, 121.01278080814838),
    new google.maps.LatLng(14.536980311753727, 121.01287200325488),
    new google.maps.LatLng(14.538075964659265, 121.01299002045154),
    new google.maps.LatLng(14.539061918089335, 121.01284569667345)];
    
    var polyline13 = new google.maps.Polygon({
        paths:magallanesPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var olyimpiaPath = [
    new google.maps.LatLng(14.567165921882102, 121.02210318077267),
    new google.maps.LatLng(14.567643582656908, 121.02221985686482),
    new google.maps.LatLng(14.568158236355902, 121.02113604537168),
    new google.maps.LatLng(14.570440085340612, 121.02194607249417),
    new google.maps.LatLng(14.570421913712785, 121.02214723817029),
    new google.maps.LatLng(14.571159784094041, 121.02251830178731),
    new google.maps.LatLng(14.573827161143456, 121.02456140375564),
    new google.maps.LatLng(14.57410492299977, 121.02423417425582),
    new google.maps.LatLng(14.574972516352304, 121.02489467542878),
    new google.maps.LatLng(14.576901209918448, 121.02162511094075),
    new google.maps.LatLng(14.576008228615343, 121.0211852286623),
    new google.maps.LatLng(14.572521632238539, 121.02044572957335),
    new google.maps.LatLng(14.572319150212897, 121.02034917004882),
    new google.maps.LatLng(14.572059557600227, 121.01964106686889),
    new google.maps.LatLng(14.5720024471844, 121.0189061415988),
    new google.maps.LatLng(14.57235808907844, 121.01796437208698),
    new google.maps.LatLng(14.572319150212897, 121.01781685059116),
    new google.maps.LatLng(14.57285391003133, 121.01615216615718),
    new google.maps.LatLng(14.571760907231262, 121.01567549285751),
    new google.maps.LatLng(14.57175571536886, 121.01560843763214),
    new google.maps.LatLng(14.570609295254352, 121.01504381672267),
    new google.maps.LatLng(14.57009810245039, 121.01556550518862),
    new google.maps.LatLng(14.569544711332023, 121.01631975187749),
    new google.maps.LatLng(14.569270924219534, 121.01675921426845),
    new google.maps.LatLng(14.568686832333839, 121.01797023163867),
    new google.maps.LatLng(14.568240325493104, 121.01923355208469),
    new google.maps.LatLng(14.567172355380244, 121.02210916163531)];
    
    var polyline14 = new google.maps.Polygon({
        paths:olyimpiaPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var palananPath = [
    new google.maps.LatLng(14.565954195432289, 121.00304081849889),
    new google.maps.LatLng(14.557844303191231, 121.00747772219889),
    new google.maps.LatLng(14.556429569921544, 121.00468569040281),
    new google.maps.LatLng(14.554968055238778, 121.00031437265771),
    new google.maps.LatLng(14.556234962478726, 120.99990667688745),
    new google.maps.LatLng(14.556577649252771, 120.99970282900232),
    new google.maps.LatLng(14.557543400025247, 120.99971355783838),
    new google.maps.LatLng(14.557958775401486, 121.00005688059228),
    new google.maps.LatLng(14.55830269270312, 120.99976157226996),
    new google.maps.LatLng(14.559330741793666, 120.99962209740119),
    new google.maps.LatLng(14.559631886579632, 120.99891399422125),
    new google.maps.LatLng(14.56058723973155, 120.99912857094245),
    new google.maps.LatLng(14.561392521902018, 120.99938310626715),
    new google.maps.LatLng(14.561493767955461, 120.99895663503378),
    new google.maps.LatLng(14.56175596029769, 120.99871844895792),
    new google.maps.LatLng(14.561981816442502, 120.99905104287576),
    new google.maps.LatLng(14.565941868888853, 121.00303712256441)];
    
    var polyline15 = new google.maps.Polygon({
        paths:palananPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var pemboPath = [
    new google.maps.LatLng(14.545223068980432, 121.05388623314842),
    new google.maps.LatLng(14.543935328472521, 121.05334979134544),
    new google.maps.LatLng(14.542927977840897, 121.05339270668968),
    new google.maps.LatLng(14.541982933380615, 121.05365019875511),
    new google.maps.LatLng(14.54145848388609, 121.05428856450065),
    new google.maps.LatLng(14.539840919283902, 121.05667272438073),
    new google.maps.LatLng(14.539072411157994, 121.05716625083947),
    new google.maps.LatLng(14.54027956163327, 121.0583396521543),
    new google.maps.LatLng(14.54107662477575, 121.05921137008414),
    new google.maps.LatLng(14.541305098370913, 121.05926233205543),
    new google.maps.LatLng(14.54140375735031, 121.05954396400199),
    new google.maps.LatLng(14.541292116922973, 121.06017160091147),
    new google.maps.LatLng(14.540996264367278, 121.06235760035362),
    new google.maps.LatLng(14.541603796126896, 121.06240588011589),
    new google.maps.LatLng(14.542545564722761, 121.06252832440852),
    new google.maps.LatLng(14.543251750374937, 121.06201870469569),
    new google.maps.LatLng(14.543656767597742, 121.06116576222895),
    new google.maps.LatLng(14.544238329490504, 121.06083853272914),
    new google.maps.LatLng(14.545006076487578, 121.06109847726987),
    new google.maps.LatLng(14.545343588210377, 121.06158663931058),
    new google.maps.LatLng(14.545395513045005, 121.06187095346615),
    new google.maps.LatLng(14.545203391095837, 121.06217672529385),
    new google.maps.LatLng(14.545987455296943, 121.06256832781003),
    new google.maps.LatLng(14.545961492950742, 121.06294383707211),
    new google.maps.LatLng(14.547914442105554, 121.06256825717412),
    new google.maps.LatLng(14.547688571562613, 121.0621672669264),
    new google.maps.LatLng(14.548773310612633, 121.05864771356948),
    new google.maps.LatLng(14.548295608981263, 121.05843850126632),
    new google.maps.LatLng(14.548516286493776, 121.05767943611511),
    new google.maps.LatLng(14.548204741706149, 121.05758287659057),
    new google.maps.LatLng(14.54792583311864, 121.05701807800607),
    new google.maps.LatLng(14.547955689550898, 121.05664927426652),
    new google.maps.LatLng(14.547152882643678, 121.05638509667732),
    new google.maps.LatLng(14.546457094382587, 121.05578964627601),
    new google.maps.LatLng(14.546005350084, 121.05506008542396),
    new google.maps.LatLng(14.545558797340293, 121.05431443131782),
    new google.maps.LatLng(14.545222713281204, 121.05388558594633)];
    
    var polyline16 = new google.maps.Polygon({
        paths:pemboPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var pinagkaisahanPath = [
    new google.maps.LatLng(14.556734273014637, 121.03699044650457),
    new google.maps.LatLng(14.556339664235766, 121.03806333011053),
    new google.maps.LatLng(14.555934670281545, 121.03989796107672),
    new google.maps.LatLng(14.555861978980296, 121.04159311717413),
    new google.maps.LatLng(14.557191187561111, 121.04216174548529),
    new google.maps.LatLng(14.55753387285003, 121.04298786586187),
    new google.maps.LatLng(14.559060373579653, 121.04321317141913),
    new google.maps.LatLng(14.559756122108707, 121.04166821902655),
    new google.maps.LatLng(14.55977689068779, 121.04137854045294),
    new google.maps.LatLng(14.560109187687136, 121.04102448886297),
    new google.maps.LatLng(14.556730948011733, 121.0369884967804)];
    
    var polyline17 = new google.maps.Polygon({
        paths:pinagkaisahanPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var pioDelPilarPath = [
    new google.maps.LatLng(14.54748753008773, 121.0131138097494),
    new google.maps.LatLng(14.548172930266785, 121.01449782960108),
    new google.maps.LatLng(14.549957992386997, 121.01355251691818),
    new google.maps.LatLng(14.550619435988544, 121.01346167236242),
    new google.maps.LatLng(14.55389478996985, 121.01387022449744),
    new google.maps.LatLng(14.556605145022118, 121.01329086735022),
    new google.maps.LatLng(14.559982875246973, 121.01179353723876),
    new google.maps.LatLng(14.55783826107546, 121.00742690096251),
    new google.maps.LatLng(14.552612319124638, 121.01028942761938),
    new google.maps.LatLng(14.55210347185271, 121.00851916966955),
    new google.maps.LatLng(14.552228087619604, 121.00746774373572),
    new google.maps.LatLng(14.552248856907251, 121.00695275960486),
    new google.maps.LatLng(14.55040038265391, 121.00748920140784),
    new google.maps.LatLng(14.550203072690074, 121.00656115708868),
    new google.maps.LatLng(14.550081051966268, 121.0072129338793),
    new google.maps.LatLng(14.54961787727568, 121.00730267920751),
    new google.maps.LatLng(14.54914536986654, 121.0075333491828),
    new google.maps.LatLng(14.548839018368556, 121.00818780818243),
    new google.maps.LatLng(14.548636514602615, 121.00891200461645),
    new google.maps.LatLng(14.548081305080133, 121.00913472249658),
    new google.maps.LatLng(14.548726103933083, 121.01229707172475),
    new google.maps.LatLng(14.547500693063421, 121.01311246326527)];
    
    var polyline18 = new google.maps.Polygon({
        paths:pioDelPilarPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var pitogoPath = [
    new google.maps.LatLng(14.557173655523378, 121.04211751838902),
    new google.maps.LatLng(14.555823677887696, 121.04154889007786),
    new google.maps.LatLng(14.555818485650077, 121.04183320423344),
    new google.maps.LatLng(14.555997617777363, 121.04193512817601),
    new google.maps.LatLng(14.555995021660621, 121.04264859577397),
    new google.maps.LatLng(14.555691275790217, 121.04267005344609),
    new google.maps.LatLng(14.555665314585312, 121.04291681667546),
    new google.maps.LatLng(14.555864389662876, 121.04326836854496),
    new google.maps.LatLng(14.555594739608571, 121.04353778560258),
    new google.maps.LatLng(14.555431183895154, 121.04473405082322),
    new google.maps.LatLng(14.555736228183497, 121.04484804470636),
    new google.maps.LatLng(14.555494788909229, 121.04575044744253),
    new google.maps.LatLng(14.556316460197813, 121.04651085369825),
    new google.maps.LatLng(14.555446760635014, 121.04766152136564),
    new google.maps.LatLng(14.555737526243432, 121.04834816687345),
    new google.maps.LatLng(14.556002330303444, 121.04905627005338),
    new google.maps.LatLng(14.556230788452815, 121.04861102335691),
    new google.maps.LatLng(14.556412516357259, 121.04854665034055),
    new google.maps.LatLng(14.557340624392209, 121.04666910403013),
    new google.maps.LatLng(14.557765875872168, 121.04629343801628),
    new google.maps.LatLng(14.558486291315873, 121.0457918649305),
    new google.maps.LatLng(14.558027745458375, 121.04493490239132),
    new google.maps.LatLng(14.5581796168376, 121.04474312444675),
    new google.maps.LatLng(14.55823543278832, 121.04464656492222),
    new google.maps.LatLng(14.558522300591264, 121.04473507781971),
    new google.maps.LatLng(14.559081973139445, 121.04327312628928),
    new google.maps.LatLng(14.557428343892646, 121.04301592581884),
    new google.maps.LatLng(14.55735305698273, 121.04215225451604),
    new google.maps.LatLng(14.557170416153738, 121.04211504592706)];
    
    var polyline19 = new google.maps.Polygon({
        paths:pitogoPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var poblacionPath = [
    new google.maps.LatLng(14.566658482266007, 121.02354990868695),
    new google.maps.LatLng(14.564519697397877, 121.02937234796046),
    new google.maps.LatLng(14.562886937049548, 121.02843328666937),
    new google.maps.LatLng(14.562219754876175, 121.02874710512411),
    new google.maps.LatLng(14.562491229932972, 121.02925462744577),
    new google.maps.LatLng(14.562572085738838, 121.02977623856918),
    new google.maps.LatLng(14.562572085738838, 121.03001495517151),
    new google.maps.LatLng(14.562467941085057, 121.03054033169775),
    new google.maps.LatLng(14.562273237954843, 121.03081659922628),
    new google.maps.LatLng(14.562935227896322, 121.03142814288168),
    new google.maps.LatLng(14.561668359133874, 121.03282557377844),
    new google.maps.LatLng(14.562755584341634, 121.03389897086025),
    new google.maps.LatLng(14.56300480377247, 121.0348270151794),
    new google.maps.LatLng(14.563039856317916, 121.03895098098882),
    new google.maps.LatLng(14.565686866590786, 121.03792868405691),
    new google.maps.LatLng(14.567409810746232, 121.03750774217116),
    new google.maps.LatLng(14.567296749984262, 121.03699362170188),
    new google.maps.LatLng(14.567203294549687, 121.03614067923515),
    new google.maps.LatLng(14.567229254396596, 121.03528237235038),
    new google.maps.LatLng(14.56755634820578, 121.03383934390037),
    new google.maps.LatLng(14.57408969885428, 121.02627670910556),
    new google.maps.LatLng(14.573566809687293, 121.02587049739361),
    new google.maps.LatLng(14.572964557767119, 121.02551510469914),
    new google.maps.LatLng(14.572200666100215, 121.02650180355737),
    new google.maps.LatLng(14.570004529502905, 121.02475374361528),
    new google.maps.LatLng(14.566652751276978, 121.02354945258263)];
    
    var polyline20 = new google.maps.Polygon({
        paths:poblacionPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var postProperNorthsidePath = [
    new google.maps.LatLng(14.545019671789671, 121.04566324315381),
    new google.maps.LatLng(14.547792444943909, 121.04442942700696),
    new google.maps.LatLng(14.54965100005536, 121.04373210875279),
    new google.maps.LatLng(14.551997944593591, 121.04337805716283),
    new google.maps.LatLng(14.553902918341077, 121.04274299400564),
    new google.maps.LatLng(14.55583443907214, 121.04157355087514),
    new google.maps.LatLng(14.55583443907214, 121.04184713619466),
    new google.maps.LatLng(14.556010975069935, 121.04193833130117),
    new google.maps.LatLng(14.556021359535983, 121.04267862098928),
    new google.maps.LatLng(14.555725402061782, 121.04268934982534),
    new google.maps.LatLng(14.555689056379697, 121.04290392654653),
    new google.maps.LatLng(14.55584482354652, 121.0432043339562),
    new google.maps.LatLng(14.555590403783825, 121.04360666530843),
    new google.maps.LatLng(14.55524252322538, 121.04575527409705),
    new google.maps.LatLng(14.555870784730295, 121.04625416497382),
    new google.maps.LatLng(14.55527214859594, 121.04741130046284),
    new google.maps.LatLng(14.5559866349629, 121.0491173602576),
    new google.maps.LatLng(14.556651239878757, 121.04951969160983),
    new google.maps.LatLng(14.556682393185076, 121.05081788077304),
    new google.maps.LatLng(14.556900466206104, 121.05093053355166),
    new google.maps.LatLng(14.55677585307762, 121.0514240600104),
    new google.maps.LatLng(14.557189208834345, 121.05157601435971),
    new google.maps.LatLng(14.557884963264408, 121.05085181792569),
    new google.maps.LatLng(14.559791272772141, 121.05147945483517),
    new google.maps.LatLng(14.560661078126895, 121.05368703985113),
    new google.maps.LatLng(14.560795254425889, 121.05373503273695),
    new google.maps.LatLng(14.560933485622074, 121.05273268240397),
    new google.maps.LatLng(14.56170295238982, 121.05263279542181),
    new google.maps.LatLng(14.561757469424565, 121.05323361024115),
    new google.maps.LatLng(14.56134010759421, 121.05403147119948),
    new google.maps.LatLng(14.562197466296842, 121.05405840553497),
    new google.maps.LatLng(14.560490261266985, 121.05697869895897),
    new google.maps.LatLng(14.558029178992486, 121.05851292251549),
    new google.maps.LatLng(14.557445358745154, 121.06051322762065),
    new google.maps.LatLng(14.557580355888225, 121.06069025341563),
    new google.maps.LatLng(14.557320745924445, 121.06093165222697),
    new google.maps.LatLng(14.557150183575013, 121.0612332378707),
    new google.maps.LatLng(14.556212739601511, 121.06089120036886),
    new google.maps.LatLng(14.555593119823824, 121.06079346177313),
    new google.maps.LatLng(14.555546389632013, 121.06002634999487),
    new google.maps.LatLng(14.555452929218722, 121.05980640885565),
    new google.maps.LatLng(14.555811193921407, 121.05944162842962),
    new google.maps.LatLng(14.555406198997218, 121.05911708113882),
    new google.maps.LatLng(14.555154374855475, 121.05943358180258),
    new google.maps.LatLng(14.555030799621335, 121.05939114212755),
    new google.maps.LatLng(14.554368785960868, 121.05927580713991),
    new google.maps.LatLng(14.55421604107674, 121.05935143260861),
    new google.maps.LatLng(14.553984984701117, 121.05933802156353),
    new google.maps.LatLng(14.553637101611855, 121.0591529491415),
    new google.maps.LatLng(14.553533255807292, 121.05923341541195),
    new google.maps.LatLng(14.553361427846149, 121.05909616839888),
    new google.maps.LatLng(14.553491235195274, 121.05886818063262),
    new google.maps.LatLng(14.553288735697267, 121.05872870576384),
    new google.maps.LatLng(14.553226428122056, 121.05878771436217),
    new google.maps.LatLng(14.552965302064635, 121.0586223682436),
    new google.maps.LatLng(14.55290299439809, 121.05874306764927),
    new google.maps.LatLng(14.552786167475919, 121.0587645253214),
    new google.maps.LatLng(14.552866648251147, 121.05929292049733),
    new google.maps.LatLng(14.552679725115217, 121.06049186792698),
    new google.maps.LatLng(14.550452561408338, 121.05874782791669),
    new google.maps.LatLng(14.54982947685837, 121.05733162155683),
    new google.maps.LatLng(14.549331007952135, 121.05688101044232),
    new google.maps.LatLng(14.547877133880373, 121.05658060303266),
    new google.maps.LatLng(14.54690095591718, 121.05625873795087),
    new google.maps.LatLng(14.54648555973019, 121.05576521149213),
    new google.maps.LatLng(14.547170963019635, 121.05513221016462),
    new google.maps.LatLng(14.547420200051915, 121.05448848000104),
    new google.maps.LatLng(14.547451354661156, 121.05424171677167),
    new google.maps.LatLng(14.546371325641779, 121.05369454613263),
    new google.maps.LatLng(14.545981890805287, 121.05322677050022),
    new google.maps.LatLng(14.54563139886522, 121.05256158266452),
    new google.maps.LatLng(14.54552170851972, 121.05178913463813),
    new google.maps.LatLng(14.54565152047872, 121.05102202285987),
    new google.maps.LatLng(14.546014993557957, 121.05020663131934),
    new google.maps.LatLng(14.54662066660755, 121.0494665571892),
    new google.maps.LatLng(14.546797209974475, 121.04835075823901),
    new google.maps.LatLng(14.5464129683481, 121.04765874831317),
    new google.maps.LatLng(14.545622510652851, 121.04690255811347),
    new google.maps.LatLng(14.54529019184177, 121.04638220956458),
    new google.maps.LatLng(14.545020182439519, 121.04566605975761)];
    
    var polyline21 = new google.maps.Polygon({
        paths:postProperNorthsidePath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var postProperSouthsidePath = [
    new google.maps.LatLng(14.529490480216156, 121.05699544180335),
    new google.maps.LatLng(14.529859674951464, 121.0203200713751),
    new google.maps.LatLng(14.530079876297094, 121.02076528053531),
    new google.maps.LatLng(14.530173347447771, 121.0210335014368),
    new google.maps.LatLng(14.530339518284697, 121.02163431625614),
    new google.maps.LatLng(14.530921115230289, 121.0224926231409),
    new google.maps.LatLng(14.530865155303658, 121.0231449996831),
    new google.maps.LatLng(14.531283177268962, 121.02337566965838),
    new google.maps.LatLng(14.531142971232063, 121.02425811642428),
    new google.maps.LatLng(14.531540221438991, 121.02430103176852),
    new google.maps.LatLng(14.531431540190214, 121.02489225748123),
    new google.maps.LatLng(14.531997555869939, 121.0249593127066),
    new google.maps.LatLng(14.532192811308079, 121.02505587690115),
    new google.maps.LatLng(14.532226564461077, 121.02536969535589),
    new google.maps.LatLng(14.53211092065319, 121.02649966550575),
    new google.maps.LatLng(14.532583464501192, 121.0268510348867),
    new google.maps.LatLng(14.533046590609764, 121.0274761247365),
    new google.maps.LatLng(14.533088301675061, 121.0278249863752),
    new google.maps.LatLng(14.533651716732688, 121.02879594603858),
    new google.maps.LatLng(14.534028191431503, 121.02896492520652),
    new google.maps.LatLng(14.533986341042542, 121.02936382671939),
    new google.maps.LatLng(14.534401760734289, 121.02952207705127),
    new google.maps.LatLng(14.53427713490875, 121.0299968280469),
    new google.maps.LatLng(14.5346209383199, 121.03023308381073),
    new google.maps.LatLng(14.534880574973178, 121.0312737809085),
    new google.maps.LatLng(14.53451189083455, 121.03171902760498),
    new google.maps.LatLng(14.534544235912163, 121.03250842655251),
    new google.maps.LatLng(14.53404573250976, 121.03358131015847),
    new google.maps.LatLng(14.534362490010281, 121.03394072616646),
    new google.maps.LatLng(14.534468941199519, 121.03419017160485),
    new google.maps.LatLng(14.53457279596887, 121.03438865507195),
    new google.maps.LatLng(14.535206714990881, 121.03480976188729),
    new google.maps.LatLng(14.535603957893779, 121.0352442797477),
    new google.maps.LatLng(14.53589875046245, 121.03604307220677),
    new google.maps.LatLng(14.535928706564006, 121.03640637321544),
    new google.maps.LatLng(14.53620911247694, 121.03633663578105),
    new google.maps.LatLng(14.53653612288338, 121.037468260677),
    new google.maps.LatLng(14.53702406910343, 121.03825247607477),
    new google.maps.LatLng(14.53908545342253, 121.03900608221959),
    new google.maps.LatLng(14.53954343684847, 121.03923733392678),
    new google.maps.LatLng(14.539979616534232, 121.03946800390206),
    new google.maps.LatLng(14.540654654826302, 121.04025120893441),
    new google.maps.LatLng(14.541092214222042, 121.04159218727945),
    new google.maps.LatLng(14.541172747042719, 121.04352153475199),
    new google.maps.LatLng(14.541302561557927, 121.04449249441538),
    new google.maps.LatLng(14.543275732795813, 121.04612327749643),
    new google.maps.LatLng(14.545041057771552, 121.04568480551835),
    new google.maps.LatLng(14.545269527265681, 121.0462534338295),
    new google.maps.LatLng(14.545554170795812, 121.04680353207974),
    new google.maps.LatLng(14.546135727691786, 121.04735070271877),
    new google.maps.LatLng(14.546431698023966, 121.04767256780056),
    new google.maps.LatLng(14.546784784918842, 121.0482733826199),
    new google.maps.LatLng(14.5468263245164, 121.04883664651302),
    new google.maps.LatLng(14.546566701903377, 121.04959302945522),
    new google.maps.LatLng(14.545934505512403, 121.05038402890952),
    new google.maps.LatLng(14.54550353006692, 121.05134962415488),
    new google.maps.LatLng(14.545508722547178, 121.05183778619559),
    new google.maps.LatLng(14.545633342036604, 121.05264244890006),
    new google.maps.LatLng(14.54595527539214, 121.05317352628501),
    new google.maps.LatLng(14.546606194968144, 121.05388102384043),
    new google.maps.LatLng(14.547166979329543, 121.05415997357798),
    new google.maps.LatLng(14.547457025892749, 121.05428090573714),
    new google.maps.LatLng(14.547215353320304, 121.05498777677238),
    new google.maps.LatLng(14.546767918678947, 121.05551799921449),
    new google.maps.LatLng(14.546462097260397, 121.05572151348532),
    new google.maps.LatLng(14.545620917498917, 121.05440723106803),
    new google.maps.LatLng(14.545029176250042, 121.05380010415112),
    new google.maps.LatLng(14.54441646140685, 121.0534497134008),
    new google.maps.LatLng(14.544011445577246, 121.0533424250402),
    new google.maps.LatLng(14.543461038259254, 121.05326732318778),
    new google.maps.LatLng(14.543045635601542, 121.05333706062217),
    new google.maps.LatLng(14.542801586175788, 121.05342289131065),
    new google.maps.LatLng(14.541487429361373, 121.05438994112403),
    new google.maps.LatLng(14.540791514145324, 121.05535609189542),
    new google.maps.LatLng(14.540043779762028, 121.0565040773538),
    new google.maps.LatLng(14.539275272341808, 121.05702979032071),
    new google.maps.LatLng(14.53846176072686, 121.0573271872352),
    new google.maps.LatLng(14.53742322911473, 121.05744520443186),
    new google.maps.LatLng(14.533598798052621, 121.05766951021477),
    new google.maps.LatLng(14.532465294724295, 121.0577177717132),
    new google.maps.LatLng(14.531831773831218, 121.05767485636896),
    new google.maps.LatLng(14.530897067558502, 121.05747100848383),
    new google.maps.LatLng(14.52948980788229, 121.05699893969721)];
    
    var polyline22 = new google.maps.Polygon({
        paths:postProperSouthsidePath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var rizalPath = [
    new google.maps.LatLng(14.52946761077884, 121.0570155715261),
    new google.maps.LatLng(14.529018256838732, 121.05842251487192),
    new google.maps.LatLng(14.529168849951844, 121.05899114318308),
    new google.maps.LatLng(14.531396577469406, 121.05985481448587),
    new google.maps.LatLng(14.53265323436998, 121.06144268222269),
    new google.maps.LatLng(14.534500723198068, 121.06112370293897),
    new google.maps.LatLng(14.535113465543603, 121.06135973733228),
    new google.maps.LatLng(14.535373101618237, 121.06229314606946),
    new google.maps.LatLng(14.53525281688298, 121.06542187813841),
    new google.maps.LatLng(14.535637077922788, 121.06666642312132),
    new google.maps.LatLng(14.536644461800917, 121.06721359376036),
    new google.maps.LatLng(14.537921859495716, 121.06610852364622),
    new google.maps.LatLng(14.538679986342668, 121.06555062417112),
    new google.maps.LatLng(14.53999708017153, 121.06421006439302),
    new google.maps.LatLng(14.540412488562549, 121.06307280777071),
    new google.maps.LatLng(14.540931747952792, 121.06239689109896),
    new google.maps.LatLng(14.541427639531003, 121.05953229187105),
    new google.maps.LatLng(14.539264920980717, 121.05710489271257),
    new google.maps.LatLng(14.53830947555051, 121.057362384778),
    new google.maps.LatLng(14.53202108760698, 121.05775398729418),
    new google.maps.LatLng(14.52947553686465, 121.057022508365)];
    
    var polyline23 = new google.maps.Polygon({
        paths:rizalPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var sanAntonioPath = [
    new google.maps.LatLng(14.566405118910373, 121.00282244774789),
    new google.maps.LatLng(14.557898053173425, 121.00769939388454),
    new google.maps.LatLng(14.560750302223951, 121.01359746585912),
    new google.maps.LatLng(14.561269513774223, 121.0155393851859),
    new google.maps.LatLng(14.56231065628972, 121.01547694678393),
    new google.maps.LatLng(14.56433407374958, 121.01632016787373),
    new google.maps.LatLng(14.564821896030562, 121.01514969439815),
    new google.maps.LatLng(14.565356674035582, 121.01426456542323),
    new google.maps.LatLng(14.56611063136356, 121.01341174285194),
    new google.maps.LatLng(14.56672068998118, 121.01294503848335),
    new google.maps.LatLng(14.567278908842352, 121.00444463320385),
    new google.maps.LatLng(14.567091997918453, 121.00419786997448),
    new google.maps.LatLng(14.566405358511467, 121.00282592006336)];
    
    var polyline24 = new google.maps.Polygon({
        paths:sanAntonioPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var sanIsidroPath = [
    new google.maps.LatLng(14.557785672830065, 121.00751107217806),
    new google.maps.LatLng(14.556058529418348, 121.00392924544269),
    new google.maps.LatLng(14.555534113359865, 121.00223408934528),
    new google.maps.LatLng(14.554947388965747, 121.00023316142017),
    new google.maps.LatLng(14.554391816641353, 121.00065695044452),
    new google.maps.LatLng(14.55409066470336, 121.00109146830494),
    new google.maps.LatLng(14.553367337412176, 121.00138507496804),
    new google.maps.LatLng(14.552650799490248, 121.00158892285317),
    new google.maps.LatLng(14.552266568052207, 121.0018464149186),
    new google.maps.LatLng(14.55204849045197, 121.00245259415597),
    new google.maps.LatLng(14.550241429619541, 121.00669770009674),
    new google.maps.LatLng(14.550417970091141, 121.00734143026031),
    new google.maps.LatLng(14.55221326608132, 121.0069434345243),
    new google.maps.LatLng(14.552258548188771, 121.00749029375336),
    new google.maps.LatLng(14.55224817906437, 121.00830026552366),
    new google.maps.LatLng(14.552648498629486, 121.0097453076336),
    new google.maps.LatLng(14.552814652559448, 121.0101422745678),
    new google.maps.LatLng(14.55778949208581, 121.00752654926256)];
    
    var polyline25 = new google.maps.Polygon({
        paths:sanIsidroPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});


var sanLorenzoPath = [
    new google.maps.LatLng(14.54125903383548, 121.01836251734862),
    new google.maps.LatLng(14.549810067893008, 121.01364978232931),
    new google.maps.LatLng(14.550438344862073, 121.01345129886221),
    new google.maps.LatLng(14.551601431391244, 121.01359613814901),
    new google.maps.LatLng(14.554086625210601, 121.01378834548382),
    new google.maps.LatLng(14.557348333930603, 121.01313713359342),
    new google.maps.LatLng(14.558487845050372, 121.01263599529963),
    new google.maps.LatLng(14.560000395771606, 121.01186056740642),
    new google.maps.LatLng(14.56088824979911, 121.0138212621963),
    new google.maps.LatLng(14.561263468004034, 121.01550102362953),
    new google.maps.LatLng(14.560479458071026, 121.01581215987525),
    new google.maps.LatLng(14.559957496293656, 121.01637211876931),
    new google.maps.LatLng(14.55787024602912, 121.01940837937417),
    new google.maps.LatLng(14.554671834177721, 121.02437583046975),
    new google.maps.LatLng(14.553789147419975, 121.02583495217385),
    new google.maps.LatLng(14.552397610537964, 121.02719751435342),
    new google.maps.LatLng(14.550299904030453, 121.02942911225381),
    new google.maps.LatLng(14.541257601363627, 121.01836323738098)];
    
    var polyline26 = new google.maps.Polygon({
        paths:sanLorenzoPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var singkamasPath = [
    new google.maps.LatLng(14.570888773239963, 121.00800382609961),
    new google.maps.LatLng(14.575073391122727, 121.01220952983496),
    new google.maps.LatLng(14.574138867965445, 121.0128639888346),
    new google.maps.LatLng(14.573596393365296, 121.01319338257453),
    new google.maps.LatLng(14.573001929275758, 121.01284320053225),
    new google.maps.LatLng(14.572817619123228, 121.01260984834795),
    new google.maps.LatLng(14.572713782349698, 121.01221288141375),
    new google.maps.LatLng(14.569531161513389, 121.01053381857042),
    new google.maps.LatLng(14.57089599173785, 121.00801091441743)];
    
    var polyline27 = new google.maps.Polygon({
        paths:singkamasPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var southCemboPath = [
    new google.maps.LatLng(14.5620338328382, 121.05398636371562),
    new google.maps.LatLng(14.56134847570859, 121.0539649060435),
    new google.maps.LatLng(14.561701538738275, 121.05319242984721),
    new google.maps.LatLng(14.561660001940579, 121.05254869968364),
    new google.maps.LatLng(14.560995412113758, 121.05274181873271),
    new google.maps.LatLng(14.560798111623434, 121.0537489793457),
    new google.maps.LatLng(14.560600810956666, 121.05363096214904),
    new google.maps.LatLng(14.560133519199791, 121.05231131531372),
    new google.maps.LatLng(14.559873912240464, 121.05160321213378),
    new google.maps.LatLng(14.557694564475433, 121.05081152918459),
    new google.maps.LatLng(14.557092269203485, 121.05158400538087),
    new google.maps.LatLng(14.556624970014989, 121.05143380167604),
    new google.maps.LatLng(14.556723622148306, 121.0510475635779),
    new google.maps.LatLng(14.5564380500625, 121.05091881754518),
    new google.maps.LatLng(14.556624970015001, 121.04942214491487),
    new google.maps.LatLng(14.556012287357344, 121.04896080496431),
    new google.maps.LatLng(14.556235553268587, 121.04863357546449),
    new google.maps.LatLng(14.556453626731258, 121.04842972757936),
    new google.maps.LatLng(14.557234736697824, 121.04686698096948),
    new google.maps.LatLng(14.55746838577006, 121.04659339564996),
    new google.maps.LatLng(14.557748228745632, 121.04691498374056),
    new google.maps.LatLng(14.558049375691793, 121.04717784022402),
    new google.maps.LatLng(14.55842840488459, 121.04724757765841),
    new google.maps.LatLng(14.559463739366384, 121.04821024813423),
    new google.maps.LatLng(14.559640272460205, 121.04865013041267),
    new google.maps.LatLng(14.560107565261944, 121.04880569853553),
    new google.maps.LatLng(14.560652738946201, 121.04842482485542),
    new google.maps.LatLng(14.561520008505404, 121.04954517458732),
    new google.maps.LatLng(14.56245458515459, 121.05169094179924),
    new google.maps.LatLng(14.562568810917897, 121.05237758730705),
    new google.maps.LatLng(14.562371511835009, 121.05301058863456),
    new google.maps.LatLng(14.562049602426134, 121.05398691271598)];
    
    var polyline28 = new google.maps.Polygon({
        paths:southCemboPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var santaCruzPath = [
    new google.maps.LatLng(14.564380951107449, 121.0163373409498),
    new google.maps.LatLng(14.56866692492567, 121.01801273374059),
    new google.maps.LatLng(14.569063454385779, 121.01716146984269),
    new google.maps.LatLng(14.570601958076994, 121.01499688833617),
    new google.maps.LatLng(14.5666947360035, 121.01291449495253),
    new google.maps.LatLng(14.565973049371218, 121.0135045809358),
    new google.maps.LatLng(14.565422696826744, 121.01414294668135),
    new google.maps.LatLng(14.564882012029571, 121.0149789926429),
    new google.maps.LatLng(14.564368001020224, 121.01634423703148)];
    
    var polyline29 = new google.maps.Polygon({
        paths:santaCruzPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var tejerosPath = [
    new google.maps.LatLng(14.567976622807373, 121.01363626692223),
    new google.maps.LatLng(14.571783210191269, 121.01555946239695),
    new google.maps.LatLng(14.5718247450819, 121.01582768329844),
    new google.maps.LatLng(14.574942478657078, 121.01663899503387),
    new google.maps.LatLng(14.575513574530323, 121.0163385876242),
    new google.maps.LatLng(14.575309692999824, 121.01566398205381),
    new google.maps.LatLng(14.574896946203292, 121.01495587887388),
    new google.maps.LatLng(14.575137878235832, 121.01398277102729),
    new google.maps.LatLng(14.574976932910582, 121.01327466784736),
    new google.maps.LatLng(14.574945782188884, 121.0129581671836),
    new google.maps.LatLng(14.57507038504924, 121.01264166651984),
    new google.maps.LatLng(14.575246905647466, 121.01238417445441),
    new google.maps.LatLng(14.575031279312068, 121.01217502678195),
    new google.maps.LatLng(14.574161966969715, 121.01288577131362),
    new google.maps.LatLng(14.57358567577431, 121.0131888609323),
    new google.maps.LatLng(14.573500010738222, 121.01304670385451),
    new google.maps.LatLng(14.573183309406625, 121.01292600444884),
    new google.maps.LatLng(14.572980827988902, 121.01282139829726),
    new google.maps.LatLng(14.57283805251841, 121.01260413936706),
    new google.maps.LatLng(14.57274070555367, 121.01223801783652),
    new google.maps.LatLng(14.569518111346829, 121.01051882028261),
    new google.maps.LatLng(14.567986190261696, 121.0136457633066)];
    
    var polyline30 = new google.maps.Polygon({
        paths:tejerosPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var urdanetaPath = [
    new google.maps.LatLng(14.554638556288293, 121.0244465972206),
    new google.maps.LatLng(14.553424092986837, 121.02625110642863),
    new google.maps.LatLng(14.550308694588953, 121.02944829957438),
    new google.maps.LatLng(14.554947703843181, 121.03502729432536),
    new google.maps.LatLng(14.557592742019915, 121.0329189438043),
    new google.maps.LatLng(14.559264622774425, 121.03119160119871),
    new google.maps.LatLng(14.560503176322166, 121.0295840221705),
    new google.maps.LatLng(14.561375452005791, 121.02782449305673),
    new google.maps.LatLng(14.554627286672234, 121.02446311372992)];
    
    var polyline31 = new google.maps.Polygon({
        paths:urdanetaPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var valenzuelaPath = [
    new google.maps.LatLng(14.56581749931623, 121.02189491403622),
    new google.maps.LatLng(14.565350218612341, 121.02307508600278),
    new google.maps.LatLng(14.569587264559841, 121.02461509117343),
    new google.maps.LatLng(14.572199710379499, 121.02650385196904),
    new google.maps.LatLng(14.57289541745076, 121.02562408741215),
    new google.maps.LatLng(14.573580738687152, 121.02591913040379),
    new google.maps.LatLng(14.57405838556129, 121.02641265686253),
    new google.maps.LatLng(14.574966950127331, 121.02497499283055),
    new google.maps.LatLng(14.574032426518654, 121.02437417801121),
    new google.maps.LatLng(14.573829945881082, 121.02457266147832),
    new google.maps.LatLng(14.57088062599488, 121.02228801720987),
    new google.maps.LatLng(14.570418547916328, 121.02212440245997),
    new google.maps.LatLng(14.570444507384613, 121.02194469445597),
    new google.maps.LatLng(14.56810814299444, 121.02111052745234),
    new google.maps.LatLng(14.567526644009092, 121.02243017428766),
    new google.maps.LatLng(14.567147630451968, 121.02226387732874),
    new google.maps.LatLng(14.567103280823888, 121.0223636250595),
    new google.maps.LatLng(14.56582085999982, 121.02189155627288)];
    
    var polyline32 = new google.maps.Polygon({
        paths:valenzuelaPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1.0, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: 0.1});
    

var westRemboPath = [
    new google.maps.LatLng(14.565831310474186, 121.05451516341728),
    new google.maps.LatLng(14.562176110777067, 121.05395726394218),
    new google.maps.LatLng(14.561189611841298, 121.05570606421989),
    new google.maps.LatLng(14.560509444215885, 121.05684868526023),
    new google.maps.LatLng(14.558286927139475, 121.05819765646638),
    new google.maps.LatLng(14.557924210508428, 121.05960257012511),
    new google.maps.LatLng(14.557458355028091, 121.06047592803866),
    new google.maps.LatLng(14.557567391182078, 121.06069050475985),
    new google.maps.LatLng(14.55731297340561, 121.06091044589907),
    new google.maps.LatLng(14.557183168304588, 121.06126449748903),
    new google.maps.LatLng(14.557801039902035, 121.06163464233309),
    new google.maps.LatLng(14.556213884024636, 121.0630680023674),
    new google.maps.LatLng(14.557838953083907, 121.06421588044171),
    new google.maps.LatLng(14.557878673155102, 121.06458200104342),
    new google.maps.LatLng(14.558330393153106, 121.06510234959231),
    new google.maps.LatLng(14.558948261537672, 121.06602234728442),
    new google.maps.LatLng(14.559191446061565, 121.0668059235553),
    new google.maps.LatLng(14.559721045572935, 121.06667181310455),
    new google.maps.LatLng(14.560349294324922, 121.06636604127685),
    new google.maps.LatLng(14.560681590462005, 121.0659798031787),
    new google.maps.LatLng(14.560932929396989, 121.0650385431451),
    new google.maps.LatLng(14.561031579603908, 121.06419632951443),
    new google.maps.LatLng(14.561462482882972, 121.06306277049482),
    new google.maps.LatLng(14.56187785087984, 121.062193734774),
    new google.maps.LatLng(14.563186254957042, 121.06077752841414),
    new google.maps.LatLng(14.564129091296552, 121.05986828572159),
    new google.maps.LatLng(14.565103052564426, 121.05775994696278),
    new google.maps.LatLng(14.565456109583435, 121.05622572340626),
    new google.maps.LatLng(14.566131069958187, 121.05457348265308),
    new google.maps.LatLng(14.565828540025516, 121.05451381214938)];
    
    polyline33 = new google.maps.Polygon({
        paths:westRemboPath, 
        // strokeColor: "#FF0000", 
        strokeColor: "green", 
        strokeOpacity: 1, 
        strokeWeight: 2,
        // fillColor: '#FF0000', 
        fillColor: 'green', 
        fillOpacity: .1});
    



document.getElementById('barangays').addEventListener('input', function() {

    if (document.getElementById('barangays').value === "belAir"){
        polyline1.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "belAir"){
        polyline1.setMap(map3);
    }
    
    if (document.getElementById('barangays').value === "bangkal"){
        polyline2.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "bangkal"){
        polyline2.setMap(map3);
    }
    
    if (document.getElementById('barangays').value === "carmona"){
        polyline3.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "carmona"){
        polyline3.setMap(map3);
    }

    if (document.getElementById('barangays').value === "cembo"){
        polyline4.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "cembo"){
        polyline4.setMap(map3);
    }

    if (document.getElementById('barangays').value === "comembo"){
        polyline5.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "comembo"){
        polyline5.setMap(map3);
    }

    if (document.getElementById('barangays').value === "dasmarinas"){
        polyline6.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "dasmarinas"){
        polyline6.setMap(map3);
    }

    if (document.getElementById('barangays').value === "eastRembo"){
        polyline7.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "eastRembo"){
        polyline7.setMap(map3);
    }

    if (document.getElementById('barangays').value === "forbesPark"){
        polyline8.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "forbesPark"){
        polyline8.setMap(map3);
    }

    if (document.getElementById('barangays').value === "guadalupeNuevo"){
        polyline9.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "guadalupeNuevo"){
        polyline9.setMap(map3);
    }

    if (document.getElementById('barangays').value === "guadalupeViejo"){
        polyline10.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "guadalupeViejo"){
        polyline10.setMap(map3);
    }

    if (document.getElementById('barangays').value === "kasilawan"){
        polyline11.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "kasilawan"){
        polyline11.setMap(map3);
    }

    if (document.getElementById('barangays').value === "laPaz"){
        polyline12.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "laPaz"){
        polyline12.setMap(map3);
    }

    if (document.getElementById('barangays').value === "magallanes"){
        polyline13.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "magallanes"){
        polyline13.setMap(map3);
    }

    if (document.getElementById('barangays').value === "olympia"){
        polyline14.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "olympia"){
        polyline14.setMap(map3);
    }

    if (document.getElementById('barangays').value === "palanan"){
        polyline15.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "palanan"){
        polyline15.setMap(map3);
    }

    if (document.getElementById('barangays').value === "pembo"){
        polyline16.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "pembo"){
        polyline16.setMap(map3);
    }

    if (document.getElementById('barangays').value === "pinagkaisahan"){
        polyline17.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "pinagkaisahan"){
        polyline17.setMap(map3);
    }

    if (document.getElementById('barangays').value === "pioDelPilar"){
        polyline18.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "pioDelPilar"){
        polyline18.setMap(map3);
    }

    if (document.getElementById('barangays').value === "pitogo"){
        polyline19.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "pitogo"){
        polyline19.setMap(map3);
    }

    if (document.getElementById('barangays').value === "poblacion"){
        polyline20.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "poblacion"){
        polyline20.setMap(map3);
    }

    if (document.getElementById('barangays').value === "postProperNorthside"){
        polyline21.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "postProperNorthside"){
        polyline21.setMap(map3);
    }

    if (document.getElementById('barangays').value === "postProperSouthside"){
        polyline22.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "postProperSouthside"){
        polyline22.setMap(map3);
    }

    if (document.getElementById('barangays').value === "rizal"){
        polyline23.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "rizal"){
        polyline23.setMap(map3);
    }

    if (document.getElementById('barangays').value === "sanAntonio"){
        polyline24.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "sanAntonio"){
        polyline24.setMap(map3);
    }

    if (document.getElementById('barangays').value === "sanIsidro"){
        polyline25.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "sanIsidro"){
        polyline25.setMap(map3);
    }

    if (document.getElementById('barangays').value === "sanLorenzo"){
        polyline26.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "sanLorenzo"){
        polyline26.setMap(map3);
    }

    if (document.getElementById('barangays').value === "singkamas"){
        polyline27.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "singkamas"){
        polyline27.setMap(map3);
    }

    if (document.getElementById('barangays').value === "southCembo"){
        polyline28.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "southCembo"){
        polyline28.setMap(map3);
    }

    if (document.getElementById('barangays').value === "staCruz"){
        polyline29.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "staCruz"){
        polyline29.setMap(map3);
    }

    if (document.getElementById('barangays').value === "tejeros"){
        polyline30.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "tejeros"){
        polyline30.setMap(map3);
    }

    if (document.getElementById('barangays').value === "urdaneta"){
        polyline31.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "urdaneta"){
        polyline31.setMap(map3);
    }

    if (document.getElementById('barangays').value === "valenzuela"){
        polyline32.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "valenzuela"){
        polyline32.setMap(map3);
    }

    if (document.getElementById('barangays').value === "westRembo"){
        polyline33.setMap(map);
    }

    else if (document.getElementById('barangays').value !== "westRembo"){
        polyline33.setMap(map3);
    }

    if (document.getElementById('barangays').value === "viewAll"){
        polyline1.setMap(map);
        polyline2.setMap(map);
        polyline3.setMap(map);
        polyline4.setMap(map);
        polyline5.setMap(map);
        polyline6.setMap(map);
        polyline7.setMap(map);
        polyline8.setMap(map);
        polyline9.setMap(map);
        polyline10.setMap(map);
        polyline11.setMap(map);
        polyline12.setMap(map);
        polyline13.setMap(map);
        polyline14.setMap(map);
        polyline15.setMap(map);
        polyline16.setMap(map);
        polyline17.setMap(map);
        polyline18.setMap(map);
        polyline19.setMap(map);
        polyline20.setMap(map);
        polyline21.setMap(map);
        polyline22.setMap(map);
        polyline23.setMap(map);
        polyline24.setMap(map);
        polyline25.setMap(map);
        polyline26.setMap(map);
        polyline27.setMap(map);
        polyline28.setMap(map);
        polyline29.setMap(map);
        polyline30.setMap(map);
        polyline31.setMap(map);
        polyline32.setMap(map);
        polyline33.setMap(map);
    }
});

// GEOCODER--------------------------------------------------------------------------------------

var geocoder = new google.maps.Geocoder();
var marker2 = new google.maps.Marker

document.getElementById('verify').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
});

document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress2(geocoder, map);
});


function geocodeAddress(geocoder, resultsMap) {

var address = document.getElementById('address').value;

geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
    resultsMap.setCenter(results[0].geometry.location);
    resultsMap.setZoom(18);

    const lngInfo = document.getElementById('lngInfo')
    latInfo.innerHTML = "Latitude: " + results[0].geometry.location.lat()
    lngInfo.innerHTML = "Longitude: " + results[0].geometry.location.lng()
    
    marker2 = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: "/assets/images/publicmarker.png",
        zoom: 20
    });

    // confirmB.disabled = false

    // google.maps.event.addListener(marker2,'click', function(e) {
    //     infowindow.setContent(content);
    //     infowindow.open(map,marker2);
    // });

    google.maps.event.addListener(marker2, 'dragend', function (evt) {
        latInfo.innerHTML = "Latitude: " + evt.latLng.lat().toFixed(7)
        lngInfo.innerHTML = "Longitude: " + evt.latLng.lng().toFixed(7)

        getReverseGeocodingData(evt.latLng.lat().toFixed(7), evt.latLng.lng().toFixed(7))
        event.preventDefault()
    }); 

    } 
    else {
    alert('Address field blank or Address does not exist');
    }

    verify.disabled = true
});
}

// INFO WINDOW--------------------------------------------------------------------------------------------------
var infowindow = new google.maps.InfoWindow();

document.getElementById('confirm').addEventListener('click', function(e) {
    infowindow.setContent("<strong>Surveyee's Name: </strong>" + fname.value + " <br /> " + "<strong>No. of Occupants: </strong>" + residents.value + " <br /> " + "<strong>Contact: </strong>" + phone.value + " <br /> " + "<strong>Fever level: </strong>" + temp.value + " <br /> " + "<strong>Travel History: </strong>" + travelYes.checked + " <br /> " + "<strong>Showing Symptoms: </strong>" + sympYes.checked);
    infowindow.open(map,marker2);
});

}

// STORE LAT LNG AT LOCAL STORAGE-------------------------------------------------------------------------------------

function geocodeAddress2(geocoder, resultsMap) {
var address = document.getElementById('address').value;
geocoder.geocode({'address': address}, function(results, status) {

    if (status === 'OK' && (document.getElementById('temp').value === "fever" || 
    document.getElementById('temp').value === "highFever" || 
    document.getElementById('temp').value === "veryHighFever" || 
    document.getElementById('travelYes').checked === true || 
    document.getElementById('sympYes').checked === true)){

    resultsMap.setCenter(results[0].geometry.location);

    // localStorage.setItem(JSON.stringify(results[0].geometry.location), 'infected');
        localStorage.setItem(JSON.stringify(results[0].geometry.location), 
            JSON.stringify({
                status: 'infected',
                name: fname.value,
                barangay: barangays.value,
                address: address.value,
                occupants: residents.value,
                contact: phone.value,
                temp: temp.value,
                travel: travelYes.checked,
                symptoms: sympYes.checked
            })
            );
    } 

    else {
        localStorage.setItem(JSON.stringify(results[0].geometry.location),    
            JSON.stringify({
                status: 'healthy',
                name: fname.value,
                barangay: barangays.value,
                address: address.value,
                occupants: residents.value,
                contact: phone.value,
                temp: temp.value,
                travel: travelYes.checked,
                symptoms: sympYes.checked
            })
            );
    }
    submit.disabled=true

    window.location.replace("successPage.html");
    // successForm.innerHTML = "Your response has been sent! Thank you!"
}); 
}


// DATE FETCH---------------------------------------------------------------------------------------------------
document.getElementById('date').valueAsDate = new Date();

// VERIFICATION-------------------------------------------------------------------------------------------------

var barangays = document.getElementById('barangays')
var fname = document.getElementById('fname')
var address = document.getElementById('address')
var verify2 = document.getElementById('verify')
var residents = document.getElementById('residents')
var phone = document.getElementById('phone')
var temp = document.getElementById('temp')
var travelY = document.getElementById('travelYes')
var travelN = document.getElementById('travelNo')
var symptomsY = document.getElementById('sympYes')
var symptomsN = document.getElementById('sympNo')
var submit = document.getElementById('submit')
var confirmB = document.getElementById('confirm')

fname.disabled = true
address.disabled = true
verify2.disabled= true
residents.disabled = true
phone.disabled = true
temp.disabled = true
travelY.disabled = true
travelN.disabled = true
symptomsY.disabled = true
symptomsN.disabled = true
submit.disabled = true
confirmB.disabled = true

function verification(){

    if (barangays.value !== ""){
        fname.disabled = false;
    }
    if (fname.value !== ""){
        address.disabled = false;
    }
    else if (fname.value === ""){
        address.disabled = true;
    }
    if (address.value !== ""){
        residents.disabled = false;
        verify2.disabled = false;
    }
    else if (address.value === ""){
        residents.disabled = true;
    }
    if (residents.value > 0){
        phone.disabled = false;
    }
    else if (residents.value <= 0){
        phone.disabled = true;
    }
    if (phone.value.length === 11){
        temp.disabled = false;
    }
    else if(phone.value.length !== 11){
        temp.disabled = true;
    }
    if (temp.value !== ""){
        travelY.disabled = false;
        travelN.disabled = false;
    }
    if (travelN.checked === true){
        symptomsY.disabled = false;
        symptomsN.disabled = false;    
    }
    if (travelY.checked === true){
        symptomsY.disabled = false;
        symptomsN.disabled = false;
    }
    if (symptomsN.checked === true){
        // submit.disabled = false;
        confirmB.disabled = false;
    }
    if (symptomsY.checked === true){
        // submit.disabled = false;
        confirmB.disabled = false;
    }
}

confirmB.addEventListener('click', function(){
    confirmB.disabled = true
    submit.disabled = false;
})


// // START ANIMATE STEP 1

// const ani1 = document.getElementById("animateStart");
// const st1 = document.getElementById("step1");

// var timerSet;

// ani1.addEventListener("mouseover", step1A);
// ani1.addEventListener("mouseout", step1E);


// // FORWARD

// function step1A() {
//     st1.src = "assets/images/1b.png";
//     timerSet = setTimeout(step1B, 100); 
//   }
  
//   function step1B() {
//     st1.src = "assets/images/1c.png";
//       timerSet = setTimeout(step1C, 200); 
//   }
  
//   function step1C() {
//     st1.src = "assets/images/1d.png";
//       timerSet = setTimeout(step1D, 300); 
//   }
  
//   function step1D() {
//     st1.src = "assets/images/1e.png";
//   }
  
//   // BACKWARD
  
//   function step1E() {
//     st1.src = "assets/images/1d.png";
//       timerSet = setTimeout(step1F, 100); 
//   }
  
//   function step1F() {
//     st1.src = "assets/images/1c.png";
//       timerSet = setTimeout(step1G, 100); 
//   }
  
//   function step1G() {
//     st1.src = "assets/images/1b.png";
//       timerSet = setTimeout(step1H, 100); 
//   }
  
//   function step1H() {
//     st1.src = "assets/images/1a.png";
//   }
  

  
// // START ANIMATE STEP 2

// const ani2 = document.getElementById("animateStart2");
// const st2 = document.getElementById("step2");

// var timerSet;

// ani2.addEventListener("mouseover", step2A);
// ani2.addEventListener("mouseout", step2E);


// // FORWARD

// function step2A() {
//     st2.src = "assets/images/2b.png";
//     timerSet = setTimeout(step2B, 100); 
//   }
  
//   function step2B() {
//     st2.src = "assets/images/2c.png";
//       timerSet = setTimeout(step2C, 100); 
//   }
  
//   function step2C() {
//     st2.src = "assets/images/2d.png";
//       timerSet = setTimeout(step2D, 100); 
//   }
  
//   function step2D() {
//     st2.src = "assets/images/2e.png";
//   }
  
//   // BACKWARD
  
//   function step2E() {
//     st2.src = "assets/images/2d.png";
//       timerSet = setTimeout(step2F, 100); 
//   }
  
//   function step2F() {
//     st2.src = "assets/images/2c.png";
//       timerSet = setTimeout(step2G, 100); 
//   }
  
//   function step2G() {
//     st2.src = "assets/images/2b.png";
//       timerSet = setTimeout(step2H, 100); 
//   }
  
//   function step2H() {
//     st2.src = "assets/images/2a.png";
//   }
  
// // START ANIMATE STEP 3

// const ani3 = document.getElementById("animateStart3");
// const st3 = document.getElementById("step3");

// var timerSet;

// ani3.addEventListener("mouseover", step3A);
// ani3.addEventListener("mouseout", step3E);


// // FORWARD

// function step3A() {
//     st3.src = "assets/images/3b.png";
//     timerSet = setTimeout(step3B, 100); 
//   }
  
//   function step3B() {
//     st3.src = "assets/images/3c.png";
//       timerSet = setTimeout(step3C, 100); 
//   }
  
//   function step3C() {
//     st3.src = "assets/images/3d.png";
//       timerSet = setTimeout(step3D, 100); 
//   }
  
//   function step3D() {
//     st3.src = "assets/images/3e.png";
//   }
  
//   // BACKWARD
  
//   function step3E() {
//     st3.src = "assets/images/3d.png";
//       timerSet = setTimeout(step3F, 100); 
//   }
  
//   function step3F() {
//     st3.src = "assets/images/3c.png";
//       timerSet = setTimeout(step3G, 100); 
//   }
  
//   function step3G() {
//     st3.src = "assets/images/3b.png";
//       timerSet = setTimeout(step3H, 100); 
//   }
  
//   function step3H() {
//     st3.src = "assets/images/3a.png";
//   }
  



// ANIMATE 1

const step1a = document.getElementById('1a')
const step1b = document.getElementById('1b')
const step1c = document.getElementById('1c')
const step1d = document.getElementById('1d')
const step1e = document.getElementById('1e')


step1b.style.display = "none"
step1c.style.display = "none"
step1d.style.display = "none"
step1e.style.display = "none"

var stepTo1a;
var stepTo1b;
var stepTo1c;
var stepTo1d;
var stepTo1e;

function hideSteps1() {
    step1a.style.display = "none"; 
    step1b.style.display = "none"; 
    step1c.style.display = "none"; 
    step1d.style.display = "none"; 
    step1e.style.display = "none"; 
}

function animateStep1() {
    stepTo1a = setTimeout(function(){
        hideSteps1()
        step1b.style.display = "flex"; 
    }, 100);

    stepTo1b = setTimeout(function(){
        hideSteps1()
        step1c.style.display = "flex"; 
    }, 200);

    stepTo1c = setTimeout(function(){
        hideSteps1()
        step1d.style.display = "flex"; 
    }, 300);

    stepTo1d = setTimeout(function(){
        hideSteps1()
        step1e.style.display = "flex"; 
    }, 400);
}

function animateStep1Reverse() {

    clearTimeout(stepTo1a);
    clearTimeout(stepTo1b);
    clearTimeout(stepTo1c);
    clearTimeout(stepTo1d);
    clearTimeout(stepTo1e);
    
    setTimeout(function(){
        hideSteps1()
        step1d.style.display = "flex"; 
    }, 100);

    setTimeout(function(){
        hideSteps1()
        step1c.style.display = "flex"; 
    }, 200);

    setTimeout(function(){
        hideSteps1()
        step1b.style.display = "flex"; 
    }, 300);

    setTimeout(function(){
        hideSteps1()
        step1a.style.display = "flex"; 
    }, 400);
}

  



const step2a = document.getElementById('2a')
const step2b = document.getElementById('2b')
const step2c = document.getElementById('2c')
const step2d = document.getElementById('2d')
const step2e = document.getElementById('2e')


step2b.style.display = "none"
step2c.style.display = "none"
step2d.style.display = "none"
step2e.style.display = "none"

var stepTo2a;
var stepTo2b;
var stepTo2c;
var stepTo2d;
var stepTo2e;

function hideSteps2() {
    step2a.style.display = "none"; 
    step2b.style.display = "none"; 
    step2c.style.display = "none"; 
    step2d.style.display = "none"; 
    step2e.style.display = "none"; 
}

function animateStep2() {
    stepTo2a = setTimeout(function(){
        hideSteps2()
        step2b.style.display = "flex"; 
    }, 100);

    stepTo2b = setTimeout(function(){
        hideSteps2()
        step2c.style.display = "flex"; 
    }, 200);

    stepTo2c = setTimeout(function(){
        hideSteps2()
        step2d.style.display = "flex"; 
    }, 300);

    stepTo2d = setTimeout(function(){
        hideSteps2()
        step2e.style.display = "flex"; 
    }, 400);
}

function animateStep2Reverse() {

    clearTimeout(stepTo2a);
    clearTimeout(stepTo2b);
    clearTimeout(stepTo2c);
    clearTimeout(stepTo2d);
    clearTimeout(stepTo2e);
    
    setTimeout(function(){
        hideSteps2()
        step2d.style.display = "flex"; 
    }, 100);

    setTimeout(function(){
        hideSteps2()
        step2c.style.display = "flex"; 
    }, 200);

    setTimeout(function(){
        hideSteps2()
        step2b.style.display = "flex"; 
    }, 300);

    setTimeout(function(){
        hideSteps2()
        step2a.style.display = "flex"; 
    }, 400);
}




const step3a = document.getElementById('3a')
const step3b = document.getElementById('3b')
const step3c = document.getElementById('3c')
const step3d = document.getElementById('3d')
const step3e = document.getElementById('3e')


step3b.style.display = "none"
step3c.style.display = "none"
step3d.style.display = "none"
step3e.style.display = "none"

var stepTo3a;
var stepTo3b;
var stepTo3c;
var stepTo3d;
var stepTo3e;

function hideSteps3() {
    step3a.style.display = "none"; 
    step3b.style.display = "none"; 
    step3c.style.display = "none"; 
    step3d.style.display = "none"; 
    step3e.style.display = "none"; 
}

function animateStep3() {
    stepTo3a = setTimeout(function(){
        hideSteps3()
        step3b.style.display = "flex"; 
    }, 100);

    stepTo3b = setTimeout(function(){
        hideSteps3()
        step3c.style.display = "flex"; 
    }, 200);

    stepTo3c = setTimeout(function(){
        hideSteps3()
        step3d.style.display = "flex"; 
    }, 300);

    stepTo3d = setTimeout(function(){
        hideSteps3()
        step3e.style.display = "flex"; 
    }, 400);
}

function animateStep3Reverse() {

    clearTimeout(stepTo3a);
    clearTimeout(stepTo3b);
    clearTimeout(stepTo3c);
    clearTimeout(stepTo3d);
    clearTimeout(stepTo3e);
    
    setTimeout(function(){
        hideSteps3()
        step3d.style.display = "flex"; 
    }, 100);

    setTimeout(function(){
        hideSteps3()
        step3c.style.display = "flex"; 
    }, 200);

    setTimeout(function(){
        hideSteps3()
        step3b.style.display = "flex"; 
    }, 300);

    setTimeout(function(){
        hideSteps3()
        step3a.style.display = "flex"; 
    }, 400);
}