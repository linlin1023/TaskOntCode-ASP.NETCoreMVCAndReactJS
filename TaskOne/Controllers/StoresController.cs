using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TaskOne.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoresController : ControllerBase
    {
        private readonly Onboarding_taskContext _context;

        public StoresController(Onboarding_taskContext context) {
            _context = context;
        }

        //GET : api/Stores
        [HttpGet]
        public IEnumerable<Store> GetStores() {
            return _context.Store; //DbSet<Store> 对象
        }

        //GET : api/Stores/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStoresById([FromRoute] int id) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            Store store = await  _context.Store.FindAsync(id);
            if (store == null)
                return NotFound();
            return Ok(store); // if store is null, the return will be NoContent();204
        }

        //PUT : api/Stores/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStores([FromRoute] int id ,[FromBody] Store store) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (id != store.Id)
                return BadRequest();
            _context.Entry(store).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        //Post : api/Stores
        [HttpPost]
        public async Task<IActionResult> PostStores([FromBody] Store store) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            _context.Store.Add(store);  //when this is executed, the is property will be set
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetStores",new { id = store.Id}, store);
        }


        //DELETE : api/Stores/9
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStores([FromRoute] int id) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            Store store = await _context.Store.FindAsync(id);
            if (store == null) {
                return NotFound();
            }
            _context.Store.Remove(store);
            await _context.SaveChangesAsync();
            return Ok(store);
        }
    }
}