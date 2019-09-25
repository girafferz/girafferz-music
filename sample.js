const scribble = require('scribbletune');
const clips = ['2021', '1001', '1201', '2101', '3021', '4021', '7021', '7202'].map(order =>
    scribble.clip({
        pattern: 'xxxxxx'.repeat(8),
        notes: scribble.arp({
            // chords: 'Dm BbM Am FM BbM FM CM Gm',
            chords: 'C G Am Em F C F G',
            count: 8,
            order,
        }),
        accent: 'xxx-',
    })
);
const clips2 = ['2021', '1001', '1201', '2101', '3021', '4021', '7021', '7202'].map(order =>
    scribble.clip({
        pattern: 'xx[[-xx_xx-]][xxxx[xxxx]]'.repeat(8),
        notes: scribble.arp({
            // chords: 'Dm BbM Am FM BbM FM CM Gm',
            chords: 'C G Am Em F C F G',
            count: 8,
            order,
        }),
        accent: 'xxx-',
    })
);
const clips3 = ['2021', '1001', '1201', '2101', '3021', '4021', '7021', '7202'].map(order =>
    scribble.clip({
        pattern: '[xx[xxx]-xx]'.repeat(16),
        notes: scribble.arp({
            // chords: 'Dm BbM Am FM BbM FM CM Gm',
            chords: 'C G Am Em F C F G',
            count: 8,
            order,
        }),
        accent: 'xxx-',
    })
);
scribble.midi([].concat(...clips), 'chords_base.mid');
scribble.midi([].concat(...clips2), 'chords_mid.mid');
scribble.midi([].concat(...clips3), 'chords_high.mid');
