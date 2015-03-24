/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        var viewPortScale = 1 / window.devicePixelRatio;

        var markers = [];
        var map = new google.maps.Map(document.getElementById('geolocation'), mapOptions);


        // var defaultBounds = new google.maps.LatLngBounds(
        // new google.maps.LatLng(-33.8902, 151.1759),
        // new google.maps.LatLng(-33.8474, 151.2631));
        //     map.fitBounds(defaultBounds);

//         var input = /** @type {HTMLInputElement} */(
//         document.getElementById('pac-input'));
//         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//         var searchBox = new google.maps.places.SearchBox(
//         /** @type {HTMLInputElement} */(input));

//         // [START region_getplaces]
//         // Listen for the event fired when the user selects an item from the
//         // pick list. Retrieve the matching places for that item.
//         google.maps.event.addListener(searchBox, 'places_changed', function() {
//         var places = searchBox.getPlaces();

//         if (places.length == 0) {
//             return;
//         }
//         for (var i = 0, marker; marker = markers[i]; i++) {
//             marker.setMap(null);
//         }

//         // For each place, get the icon, place name, and location.
//         markers = [];
//         var bounds = new google.maps.LatLngBounds();
//         for (var i = 0, place; place = places[i]; i++) {
//             var image = {
//                 url: place.icon,
//                 size: new google.maps.Size(71, 71),
//                 origin: new google.maps.Point(0, 0),
//                 anchor: new google.maps.Point(17, 34),
//                 scaledSize: new google.maps.Size(25, 25)
//         };

//         // Create a marker for each place.
//         var marker = new google.maps.Marker({
//             map: map,
//             icon: image,
//             title: place.name,
//             position: place.geometry.location
//         });

//         markers.push(marker);

//         bounds.extend(place.geometry.location);
//     }

//     map.fitBounds(bounds);
//   });
//   // [END region_getplaces]

//   // Bias the SearchBox results towards places that are within the bounds of the
//   // current map's viewport.
//   google.maps.event.addListener(map, 'bounds_changed', function() {
//     var bounds = map.getBounds();
//     searchBox.setBounds(bounds);
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
    // Update DOM on a Received Event

    onSuccess: function(position) {

        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latLong,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('geolocation'), mapOptions);
    },

    onError: function(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    },





    


};
