import { SlugifyOpts } from "@/shared/libs/slugify/types";

const slugifyReplace = (slug: string, opts: SlugifyOpts): string => {
    const replacement = opts.replacement !== undefined ? opts.replacement : "-";
    const trim = opts.trim !== undefined ? opts.trim : true;

    let _slug = slug
        .normalize()
        .split("")
        .reduce((result, ch) => {
            let appendChar = charMap[ch];
            if (appendChar === undefined) appendChar = ch;
            if (appendChar === replacement) appendChar = " ";
            return result + appendChar.replace(opts.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
        }, "");

    if (opts.strict) {
        _slug = _slug.replace(/[^A-Za-z0-9\s]/g, "");
    }

    if (trim) {
        _slug = _slug.trim();
    }

    _slug = _slug.replace(/\s+/g, replacement);

    if (opts.lower) {
        _slug = _slug.toLowerCase();
    }

    return _slug;
};

export { slugifyReplace };
