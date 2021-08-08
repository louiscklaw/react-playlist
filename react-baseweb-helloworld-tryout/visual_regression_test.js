describe('Visual Regression Tests', () => {
  getAllScenarios().forEach((scenario) => {
    describe(scenario, () => {
      it('desktop', async () => {
        await setupDesktop();
        await snapshot();
      });
      it('mobile', async () => {
        await setupMobile();
        await snapshot();
      });
      it('dark', async () => {
        await setupDark();
        await snapshot();
      });
      getAllInteractionsForScenario(scenario).forEach((interaction) => {
        it(interaction.name, async () => {
          await interaction.behavior();
          await snapshot();
        });
      });
    });
  });
});
