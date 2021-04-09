function Metadataparser(version, channel, keyField) {
    this._version = version
    this._channel = channel
    this._keyField = keyField

    this.getVersion = function() {
        return this._version
    }
    this.getChannel = function() {
        return this._channel
    }
    this.getKeyField = function() {
        return this._keyField
    }
    this.setVersion = function(version) {
        this._version = version
    }
    this.setChannel = function(channel) {
        this._channel = channel
    }
    this.setKeyField = function(keyField) {
        this._keyField = keyField
    }
}


Metadataparser.prototype.getKeyFields = function(jsonArr = []) {    
    return jsonArr.map((obj) => {return obj._keyField})
}

let objArr = new Metadataparser(0.1, 12, 'F')

console.log(objArr.getKeyFields([{_keyField: 'A'}, {_keyField: 'B'}, {_keyField: 'C'}]))

