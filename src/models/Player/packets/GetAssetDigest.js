import POGOProtos from "node-pogo-protos-vnext";

import * as shared from "../../../shared";

/**
 * @param {Object} msg
 * @return {Buffer}
 */
export default function GetAssetDigest(msg) {
  return (
    shared.GAME_ASSETS[this.platform].buffer
  );
}