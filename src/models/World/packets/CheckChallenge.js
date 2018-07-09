import POGOProtos from "node-pogo-protos-vnext";

/**
 * @param {Object} msg
 */
export default function CheckChallenge(msg) {

  let buffer = {
    challenge_url: " "
  };

  return (
    POGOProtos.serialize(buffer, "POGOProtos.Networking.Responses.CheckChallengeResponse")
  );

}