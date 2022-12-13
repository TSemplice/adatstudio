export const slugContent = (locale) => {
  return `
    ...,
    meta {
      ...,
      image { asset -> { url }}
    },
    components[] {
      _type == 'contactBlock' => {
        ...,
        "cookies":  *[_type == "settings"][0].cookies,
        "instagram":  *[_type == "settings"][0].instagram,
        "linkedin":  *[_type == "settings"][0].linkedin,
        "privacy":  *[_type == "settings"][0].privacy
      },
      ...,
      cta {
        ...,
        internal -> {...}
      },
      projects[] -> {
        ...
      }
    }
  `
}
