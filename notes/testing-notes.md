`describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>); 
      countdown.handleSetCountdown(10); 

      expect(countdown.state.count).toBe(10); 
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done(); 
      }, 1001);
    });
  });`

  **done** 
  - This allows for async tests
  - pass in done to the it callback 
  - call done when the tests are finished