using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperheroAPI.Data;

namespace SuperheroAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SuperHeroController : ControllerBase
{
	private readonly DataContext _context;

	public SuperHeroController(DataContext context)
	{
		_context = context;
	}

	[HttpGet]
	public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
	{

		return Ok(await _context.SuperHeroes.ToListAsync());	

		/*
		 //old return to return object saved by me not by database
		return new List<SuperHero> {
			new SuperHero
			{
				Name = "Spide Man",
				FirstName = "peter",
				LastName = "Barker",
				Place = " New YorK City"
			} 
		};*/

	}


	[HttpPost]
	public async Task<ActionResult<List<SuperHero>>> CreateSuperHero(SuperHero hero)
	{
		_context.SuperHeroes.Add(hero);
		await _context.SaveChangesAsync();
		return Ok(await _context.SuperHeroes.ToListAsync());
	}

	[HttpPut]
	public async Task<ActionResult<List<SuperHero>>> UpdateSuperHero (SuperHero hero)
	{
		var dbHero =await _context.SuperHeroes.FindAsync(hero.Id);

		if(dbHero== null) 
			return BadRequest(" HERO NOT FOUND.");

		dbHero.Name= hero.Name;
		dbHero.FirstName= hero.FirstName;
		dbHero.LastName= hero.LastName;
		dbHero.Place= hero.Place;

		await _context.SaveChangesAsync();

		return Ok(await _context.SuperHeroes.ToListAsync());

	}

	[HttpDelete("{id}")]

	public async Task<ActionResult<List<SuperHero>>> DeleteSuperHero(int id)
	{
		var dbHero = await _context.SuperHeroes.FindAsync(id);
		if (dbHero == null)
			return BadRequest(" HERO NOT FOUND.");

		_context.SuperHeroes.Remove(dbHero);
		await _context.SaveChangesAsync();

		return Ok(await _context.SuperHeroes.ToListAsync());	
	
	}


}
