exports.up = pgm => {
    pgm.createTable('crystal_isles_steamids', {
    steamId: 'varchar(1000)',
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
};

exports.down = pgm => {
  pgm.dropTable('crystal_isles_steamids')
};