function get_last_game_title(tp) {
  const dv = app.plugins?.plugins?.dataview?.api;
  if (!dv) return "Dataview API not available";

  // Folder where your sessions live
  const folder = "campaign/sessions";
  const pattern = /^\d{2}-\d{2}-\d{4}\s+\d{2}-\d{2}$/; // matches "MM-DD-YYYY HH-mm"

  // Get all matching session files
  let titles = dv.pages(`"${folder}"`)
    .where(p => typeof p?.file?.name === "string" && pattern.test(p.file.name))
    .array();

  if (titles.length === 0) return "No sessions found";

  // Parse date/time and sort oldest → newest
  titles = titles
    .map(p => {
      const m = p.file.name.match(/(\d{2}-\d{2}-\d{4}\s+\d{2}-\d{2})/);
      const dateStr = m ? m[1] : null;
      const d = dateStr ? window.moment(dateStr, "MM-DD-YYYY HH-mm", true) : null;
      return { file: p.file, d };
    })
    .filter(x => x.d && x.d.isValid())
    .sort((a, b) => a.d.valueOf() - b.d.valueOf()); // ascending order

  // If there’s more than one session, grab the one before the newest
  if (titles.length > 1) {
    const previous = titles[titles.length - 2].file;
    return previous.name; // returns just "10-25-2025 20-10" instead of full path
  } else {
    return "No previous session found";
  }
}

module.exports = get_last_game_title;
