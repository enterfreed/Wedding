using Microsoft.AspNetCore.Mvc;
using Wedding.Models;

namespace Wedding.Controllers;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]

public class WeddingController : Controller
{
    [HttpPost("GetFormData")]
    public async Task<IActionResult> GetFormData([FromBody] FormData data)
    {
        //Вырезать всякую гадость с инпута на случай тролинга, валидация
        // сброс формы после отправки.
        //Вывод сообщения об успешной отправке
        ////Бахнуть вместо кнопки блок с новым текстом
        
        var tt = data.Name;
        return Ok("ОК!");
    }
}