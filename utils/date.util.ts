const getUtcTimestamp = () => {
    var now = new Date();
    var utcTimestamp = Date.UTC(now.getFullYear(),now.getMonth(), now.getDate() , 
    
    now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
    return utcTimestamp
}

export {getUtcTimestamp}