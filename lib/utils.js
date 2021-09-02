import * as bucketData from "../constants/existingBuckets";
import * as auroriansInfo from '../constants/auroryproject/index';

export async function loadExistingBuckets() {
    const res = {
        existingBuckets: bucketData.EXISTING_BUCKETS,
    }
    
    return res;
}

export async function loadAuroriansInfo(id) {
    const res = {
        auroriansInfo: auroriansInfo.AURORIANS_INFO,
    }
    
    return res;
}