import POGOProtos from "node-pogo-protos-vnext";

import ENUM from "../../../enum";

/**
 * @param {Object} msg
 * @return {Buffer}
 */
export default function GetPlayer(msg) {

  let buffer = {
    success: true,
    player_data: this.getPlayerData()
  };

  return (
    POGOProtos.serialize(buffer, "POGOProtos.Networking.Responses.GetPlayerResponse")
  );

}