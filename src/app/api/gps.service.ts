import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root',
})
export class GpsService {
  public apiURL = 'http://bitacoragps.com:8080/track/Service';
  //public apiSMS = 'http://34.218.164.47:3000/'
  public apiSMS = 'http://23.239.12.79:3000/'
  public headers;

  constructor(private http: HttpClient, private httpNative: HTTP) {
    this.headers = {
      // Specifying that we will send XML.
      "Content-type": 'text/xml;charset="utf-8"',

      // Specifying that we will except XML.
      "Accept": "text/xml",
    };
    // Setting the data serializer as "utf8" is very important so that
    // the HTTP will know that the body will not be a JSON object, but
    // a unicoded string which is the XML.
    this.httpNative.setDataSerializer("utf8");
  }

  postLogin(body) {
    return this.httpNative.post(this.apiURL, body, this.headers);
  }

  postDeviceID(body) {
    return this.httpNative.post(this.apiURL, body, this.headers);
  }

  postDeviceInformation(body) {
    return this.httpNative.post(this.apiURL, body, this.headers);
  }

  postEventData(body) {
    return this.httpNative.post(this.apiURL, body, this.headers);
  }

  xmlStringToJson(xml: string) {
    // Convert the XML string to an XML Document.
    const oParser = new DOMParser();
    const oDOM = oParser.parseFromString(xml, 'application/xml');
    // Convert the XML Document to a JSON Object.
    return this.xmlToJson(oDOM);
  }

  /**
   * REF: https://davidwalsh.name/convert-xml-json
   */
  xmlToJson(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == 'undefined') {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == 'undefined') {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

  sendSMS(body) {
    return this.httpNative.post(this.apiSMS + 'sms', body, {
      "Content-type": 'application/json'
    });
  }
}
