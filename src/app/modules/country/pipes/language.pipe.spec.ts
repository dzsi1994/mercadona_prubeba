import { LanguagePipe } from './language.pipe';

fdescribe('LanguagePipe', () => {
  it('create an instance', () => {
    const pipe = new LanguagePipe();
    expect(pipe).toBeTruthy();
  });
  it('shold return "---" as parameter is undefined', () => {
    const pipe = new LanguagePipe();
    console.log(pipe.transform(undefined));
    expect(pipe.transform(undefined)).toBe('---');
  });

  it('shold return Spanish', () => {
    const pipe = new LanguagePipe();
    expect(pipe.transform({ spa: 'Spanish' })).toBe('Spanish');
  });
});
