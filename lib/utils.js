import * as bucketData from "../constants/existingBuckets";
import * as assetsMetadata from "../constants/assetsMetadata";

export async function loadExistingBuckets() {
    const res = {
        existingBuckets: bucketData.EXISTING_BUCKETS,
    }
    
    return res;
}

export async function loadAssets(id) {
    
    const assetsData = assetsMetadata.ASSETS_METADATA;

    const assetArray = assetsData.find(obj => {
        return obj.id === id;
    });
    
    return assetArray;
}