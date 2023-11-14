function splitReply(gptRep) {
  if (!gptRep) {
    return ["", ""];
  }
  const regex = /\(([^)]+)\)/g;
  const feedback = [];
  const stringWithoutParentheses = gptRep.replace(regex, (match, group) => {
    feedback.push(group);
    return "";
  });
  let res = [stringWithoutParentheses, feedback];
  return res;
}

export { splitReply };
