import POGOProtos from "node-pogo-protos-vnext";

/**
 * @param {Object} msg
 * @return {Buffer}
 */
export default function CheckAwardedBadges(msg) {

  let buffer = {
    success: true,
    awarded_badges: [],
    awarded_badge_levels: []
  };

  return (
    POGOProtos.serialize(buffer, "POGOProtos.Networking.Responses.CheckAwardedBadgesResponse")
  );

}