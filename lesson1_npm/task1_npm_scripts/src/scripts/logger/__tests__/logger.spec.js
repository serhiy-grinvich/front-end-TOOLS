import { createLogger } from '../logger.js';

it('should return saved logs', () => {
  const logger = createLogger('user login');
  expect(logger.getLogs()).toEqual([]);
});

it('should save errors in memory', () => {
  const logger = createLogger('user');
  logger.error('oops! something wrong!');
  expect(logger.getLogs()).toEqual([`error - user - oops! something wrong!`]);
});

it('should save logs in memory', () => {
  const logger = createLogger('user login');
  logger.log('hi user!');
  expect(logger.getLogs()).toEqual([`log - user login - hi user!`]);
});
