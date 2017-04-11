/// <reference types="googlemaps" />
import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class Circle extends BaseMapDirective {
    private ng2MapComp;
    center: any;
    clickable: any;
    draggable: any;
    editable: any;
    fillColor: any;
    fillOpacity: any;
    map: any;
    radius: any;
    strokeColor: any;
    strokeOpacity: any;
    strokePosition: any;
    strokeWeight: any;
    visible: any;
    zIndex: any;
    options: any;
    geoFallbackCenter: any;
    centerChanged: any;
    click: any;
    dblclick: any;
    drag: any;
    dragend: any;
    dragstart: any;
    mousedown: any;
    mousemove: any;
    mouseout: any;
    mouseover: any;
    mouseup: any;
    radiusChanged: any;
    rightclick: any;
    initialized$: EventEmitter<any>;
    mapObject: google.maps.Circle;
    objectOptions: google.maps.CircleOptions;
    constructor(ng2MapComp: Ng2MapComponent);
    initialize(): void;
    setCenter(): void;
}
